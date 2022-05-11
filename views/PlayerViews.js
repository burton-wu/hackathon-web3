import React from 'react';

const exports = {};

exports.Done = class extends React.Component {
  render() {
    const {outcome} = this.props;
    console.log(`Done1 - ${outcome[0]}, ${outcome[1]}, ${outcome[2]}`);
    console.log(`Done2 - ${outcome}`);
    return (
      <div>
        Alice's current results are:
        <br />{outcome || '(Displaying Array Is Still Unresolved)'}
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