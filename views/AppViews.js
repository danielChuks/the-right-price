import React from "react";

const exports = {};

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="App">
        <header className="App-header" id="root">
          <h3 style={{color: "yellow"}}> The Price Is Right, You go home with a big pocket</h3>
          {content}
        </header>
      </div>
    );
  }
};

exports.ConnectAccount = class extends React.Component {
  render() {
    return (
      <div>
        Please wait while we connect to your account.
      </div>
    );
  }
};

exports.FundAccount = class extends React.Component {
  render() {
    const { bal, standardUnit, defaultFundAmt, parent } = this.props;
    const amt = (this.state || {}).amt || defaultFundAmt;
    return (
      <div style={{color: "yellow"}}>
        <hr />
        <div>
          <button style={{paddingInline: 400 }} onClick={() => parent.fundAccount(amt)}> Click to play </button>
        </div>
      </div>
    );
  }
};

exports.DeployerOrAttacher = class extends React.Component {
  render() {
    const { parent } = this.props;
    return (
      <div>
          <button onClick={() => parent.selectDeployer()}>Click here to create a new contract</button> 
        <p>
          <button onClick={() => parent.selectAttacher()}>Click to join an existing contract</button>
        </p>
      </div>
    );
  }
};

export default exports;
