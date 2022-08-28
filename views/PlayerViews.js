import React from "react";
import { render } from "react-dom";
//add draw
const exports = {};

// Player views must be extended.
// It does not have its own Wrapper view.

exports.GetPriceGuess = class extends React.Component {
  render() {
    const { parent, playable, hand } = this.props;
    return (
      <div>
        {hand ? "It was a draw! play again." : ""}
        <br />
        {!playable ? "Please wait..." : ""}
        <br />
        <button style={{paddingInline: 100, marginRight: 10}} disabled={!playable} onClick={() => parent.guessPrice()}> Guess </button>
        <button style={{paddingInline: 100}} disabled={!playable} onClick={() => parent.guessPrice()}> Guess </button>
        <button style={{paddingInline: 100}} disabled={!playable} onClick={() => parent.guessPrice()}> Guess </button>
      </div>
    );
  }
};

exports.WaitingForResults = class extends React.Component {
  render() {
    return (
      <div>
        Waiting for results... <br />
        You guessed {this.props.guessOutcome}
      </div>
    );
  }
};

exports.Done = class extends React.Component {
  render() {
    const { outcome } = this.props;
    return (
      <div>
         {`The result is` outcome || "Unknown"}
      </div>
    );
  }
};


exports.Timeout = class extends React.Component {
  render() {
    return <div>There's been a timeout. (Someone took too long.)</div>;
  }
};

export default exports;
