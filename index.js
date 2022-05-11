//REACH_CONNECTOR_MODE=ALGO ../reach react

import React from 'react';
import AppViews from './views/AppViews';
import DeployerViews from './views/DeployerViews';
import AttacherViews from './views/AttacherViews';
import {renderDOM, renderView} from './views/render';
import './index.css';
import * as backend from './build/index.main.mjs';
import { loadStdlib } from '@reach-sh/stdlib';
const reach = loadStdlib(process.env);

// Additional codes to run on Algorand
import { ALGO_MyAlgoConnect as MyAlgoConnect } from '@reach-sh/stdlib';
reach.setWalletFallback(reach.walletFallback({
  providerEnv: 'TestNet', MyAlgoConnect }));

const handToInt = {'#1': 0, '#2': 1, '#3': 2};
//const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', defaultWager: '0.001', standardUnit};

// Assume Alice has not completed any Weeks
let weekOutcomeArray = [false, false, false];

// No change is required here
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {view: 'ConnectAccount', ...defaults};
  }
  async componentDidMount() {
    const acc = await reach.getDefaultAccount();
    const balAtomic = await reach.balanceOf(acc);
    const bal = reach.formatCurrency(balAtomic, 4);
    this.setState({acc, bal});
    if (await reach.canFundFromFaucet()) {
      this.setState({view: 'FundAccount'});
    } else {
      this.setState({view: 'DeployerOrAttacher'});
    }
  }
  async fundAccount(fundAmount) {
    console.log("async fundAccount");
    await reach.fundFromFaucet(this.state.acc, reach.parseCurrency(fundAmount));
    this.setState({view: 'DeployerOrAttacher'});
  }
  async skipFundAccount() { this.setState({view: 'DeployerOrAttacher'}); }
  selectAttacher() { this.setState({view: 'Wrapper', ContentView: Attacher}); }
  selectDeployer() { this.setState({view: 'Wrapper', ContentView: Deployer}); }
  render() { return renderView(this, AppViews); }
}

class Player extends React.Component {
  // seeWeekOutcomeArray
  // BW: Changes to exports.Done is required
  //     Do we need async?
  //     What's the parameter outcome?
  async seeWeekOutcomeArray() {
    console.log(`Alice's weekly status is: ${weekOutcomeArray}`);
    return weekOutcomeArray;
  }
}

// Alice
class Deployer extends Player {
  // BW: How do we remove the Wager's section and go directly to deploy?
  constructor(props) {
    super(props);
    this.state = {view: 'Deploy'};
  }
  // BW: Some changes to deploy() is also required
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    this.wager = reach.parseCurrency(0); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
    console.log("deploy() has been completed!");
  }
  // Calling this function provideWeek instead of getHand
  // Moved from Player to Deployer 
  async provideWeek() { // Fun([], UInt)
    const hand = await new Promise(resolveHandP => {
      this.setState({view: 'GetHand', playable: true, resolveHandP});
    });
    return handToInt[hand];
  }
  render() { return renderView(this, DeployerViews); }
}

// Creator
class Attacher extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Attach'};
  }
  attach(ctcInfoStr) {
    const ctc = this.props.acc.contract(backend, JSON.parse(ctcInfoStr));
    this.setState({view: 'Attaching'});
    backend.Creator(ctc, this);
  }
  // updateWeekOutcomeArray
  // BW: react does not like this block of code?
  //     All I want to do is to update the array
  updateWeekOutcomeArray(weekNumber, weekOutcome) {
    weekOutcomeArray[weekNumber] = weekOutcome;
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);