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

//const handToInt = {'#1': 0, '#2': 1, '#3': 2};
//const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', /*defaultWager: '0.001',*/ standardUnit};

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
  async seeWeekOutcomeArray() {
    console.log(`Alice's weekly status is: ${weekOutcomeArray}`);
    // Will mirror this with "Done" to show the results
    this.setState({view: 'Done', outcome: weekOutcomeArray});
    if ( weekOutcomeArray[1] == true ) {
      console.log(`I want to do something here`);
    }
    // Plus an additional button to go back to provideWeek screen (except init)
    return weekOutcomeArray;
  }
}

// Alice
class Deployer extends Player {
  constructor(props) {
    super(props);
    this.state = {view: 'Deploy'};
  }
  async deploy() {
    const ctc = this.props.acc.contract(backend);
    this.setState({view: 'Deploying', ctc});
    //this.wager = reach.parseCurrency(0); // UInt
    this.deadline = {ETH: 10, ALGO: 100, CFX: 1000}[reach.connector]; // UInt
    backend.Alice(ctc, this);
    const ctcInfoStr = JSON.stringify(await ctc.getInfo(), null, 2);
    this.setState({view: 'WaitingForAttacher', ctcInfoStr});
  }
  // BW: Interaction with Week # is required
  async provideWeek() { // Fun([], UInt)
    // Currently hard code this to 1 (ie Week 2)
    const hand = 1;
    return hand;
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
    console.log("Contract has been attahed");
  }
  async updateWeekOutcomeArray(weekNumber, weekOutcome) {
    weekOutcomeArray[weekNumber] = weekOutcome;
    console.log(`Week index ${weekNumber} has been updated with ${weekOutcome}`);
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);