import React from 'react';
import PlayerViews from './PlayerViews';

import logo1 from './1.png';
import logo2 from './2.png';
import logo3 from './3.png';

const exports = {...PlayerViews};

const sleep = (milliseconds) => new Promise(resolve => setTimeout(resolve, milliseconds));

exports.GetHand = class extends React.Component {
  render() {
    const {parent, playable, hand, outcome} = this.props;
    return (
      // BW: Conditional statements are required: if disabled then greyout else standard picture
      // BW: The png path needs to be adjusted when moves to MainNet 
      <div>
        Please select the module badge you'd like to collect.
        {hand ? '' : ''}
        <br />
        {!playable ? 'Please wait...' : ''}
        <br />
        <button
          disabled={outcome[0]}
          onClick={() => parent.playHand('ROCK')}
        >Modele 1<img src={logo1} alt={"logo1"} height ="200" width="200"/></button>
        <button
          disabled={outcome[1]}
          onClick={() => parent.playHand('PAPER')}
        >Modele 2<img src={logo2} alt={"logo2"} height ="200" width="200"/></button>
        <button
          disabled={outcome[2]}
          onClick={() => parent.playHand('SCISSORS')}
        >Module 3<img src={logo3} alt={"logo3"} height ="200" width="200"/></button>
      </div>
    );
  }
}

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results...
      </div>
    );
  }
}

exports.Wrapper = class extends React.Component {
  render() {
    const {content} = this.props;
    return (
      <div className="Deployer">
        <h2>The happy customer!</h2>
        {content}
      </div>
    );
  }
}

exports.SetWager = class extends React.Component {
  render() {
    const {parent, defaultWager, standardUnit} = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div>
        <input
          type='number'
          placeholder={defaultWager}
          onChange={(e) => this.setState({wager: e.currentTarget.value})}
        /> {standardUnit}
        <br />
        <button
          onClick={() => parent.setWager(wager)}
        >Set wager</button>
      </div>
    );
  }
}

exports.Deploy = class extends React.Component {
  render() {
    const {parent, wager, standardUnit} = this.props;
    return (
      <div>
        The assessment fee is 0.5 ALGO for each module.
        <br />
        <button
          onClick={() => parent.deploy()}
        >Accept</button>
      </div>
    );
  }
}

exports.Deploying = class extends React.Component {
  render() {
    return (
      <div>Deploying... please wait.</div>
    );
  }
}

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const {ctcInfoStr} = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = 'Copied!';
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const {ctcInfoStr} = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <pre className='ContractInfo'>
          {ctcInfoStr}
        </pre>
        <button
          onClick={(e) => this.copyToClipboard(e.currentTarget)}
        >Copy to clipboard</button>
      </div>
    )
  }
}

export default exports;