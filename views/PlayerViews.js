import React from 'react';

const exports = {};

// BW: Trying to rename this to say Results
exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    console.log(`outcomes are ${outcome[0]}, ${outcome[1]}, ${outcome[2]}`);    
    return (
      <div>
        Alice's current results are:
        <br />{outcome[0]}, {outcome[1]}, {outcome[2]}
        <br />(Array Needs to be Displayed differently?)
      </div>
    );
  }
}

// BW: New code added mirroring Done above but not working
exports.UpdateW = class extends React.Component {
  render() {
    const {week} = this.props;
    return (
      <div>
        Updating the results of Week {week}...
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