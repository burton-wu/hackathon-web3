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
const handToInt = {'ROCK': 0, 'PAPER': 1, 'SCISSORS': 2};
//const intToOutcome = ['Bob wins!', 'Draw!', 'Alice wins!'];
const {standardUnit} = reach;
const defaults = {defaultFundAmt: '10', /*defaultWager: '0.001',*/ standardUnit};

// Initialise weekOutcomeArray; currently set Week 1 to be true
let weekOutcomeArray = [false, false, true];

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
  // BW: Need a mini tour on syntex of this.setState, view, this.prob, render, etc
  // BW: Unable to display weekOutcomeArray displayed on the screen. Why?
  // BW: Why cannot I rename the view to say Results?
  async seeWeekOutcomeArray() {
    this.setState({view: 'Done', outcome: weekOutcomeArray});
    console.log(`Alice's weekly results are: ${weekOutcomeArray}`);
    return weekOutcomeArray;
  }
  // BW: Alice doesn't see the outcome of this update if she doesn't run this? Why?
  // BW: Why cannot I just create screen UpdateW?
  async updateWeekOutcomeArray(weekNumber, weekOutcome) {
    //this.setState({view: 'UpdateW', week: weekNumber});
    weekOutcomeArray[weekNumber] = weekOutcome;
    console.log(`Week index ${weekNumber} has been updated with ${weekOutcome}`);
    console.log(`Weekoutcome Array is now ${weekOutcomeArray}`);
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

  // BW: What's this resolveHandP means?
  //     How do I pass weekOutcomeArray?
  //     How do I show the icon?
  //     How do I show different icons based on the conditions?
  // Req: The requirement is to display the webpage with 3 picture icons
  //      If the week is true then icon is the grey out version and can be clicked ie alternative icons
  //      Else the week is the colour icon and cannot be clicked
  //      Ideally seeWeekOutcomeArray is the cut down version of this ie display only
  // GetHand and WaitingForResults have been copied to DeployerViews.js (Necessary?)
  async provideWeek() { // Fun([], UInt)
    const hand = await new Promise(resolveHandP => {
      this.setState({view: 'GetHand', playable: true, outcome: weekOutcomeArray, resolveHandP});
    });
    console.log(`Modeule ${handToInt[hand]+1} has been selected`);
    this.setState({view: 'WaitingForResults', hand});
    return handToInt[hand];
  }
  playHand(hand) { this.state.resolveHandP(hand); }
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
    console.log("The Smart Contract has been attahed");
  }
  render() { return renderView(this, AttacherViews); }
}

renderDOM(<App />);