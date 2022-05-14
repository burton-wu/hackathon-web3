import React from 'react';

const exports = {};

exports.ViewResults = class extends React.Component {
  render() {
    const {outcome} = this.props;
    console.log(`outcomes are ${outcome[0]}, ${outcome[1]}, ${outcome[2]}`);
    // BW: We may want to improve the UI here    
    return (
      <div>
        Alice's current results are:
        <br />{String(outcome[0])}, {String(outcome[1])}, {String(outcome[2])}
      </div>
    );
  }
}

exports.UpdateResults = class extends React.Component {
  render() {
    return (
      <div>
        Issuing the module badge...
      </div>
    );
  }
}

exports.Timeout = class extends React.Component {
  render() {
    return (
      <div>
        There's been a timeout.
      </div>
    );
  }
}

export default exports;