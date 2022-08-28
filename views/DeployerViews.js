import React from "react";
import PlayerViews from "./PlayerViews";

const exports = { ...PlayerViews };

const sleep = (milliseconds) =>
  new Promise((resolve) => setTimeout(resolve, milliseconds));

exports.Wrapper = class extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <div className="Deployer">
        {content}
      </div>
    );
  }
};

exports.SetWager = class extends React.Component {
  render() {
    const { parent, defaultWager, standardUnit } = this.props;
    const wager = (this.state || {}).wager || defaultWager;
    return (
      <div style={{color: "yellow"}}>
        Select the number of Algo
        <input
          type="number"
          placeholder={defaultWager}
          onChange={(e) => this.setState({ wager: e.currentTarget.value })}
        />
        <button style={{ paddingInline: 50}}  onClick={() => parent.setWager(wager)}>Send wager</button>
      </div>
    );
  }
};

exports.Deploy = class extends React.Component {
  render() {
    const { parent, wager, standardUnit } = this.props;
    return (
      <div >
        Deploy with : <strong>{wager}</strong> {standardUnit}
        <br />
        <button style={{paddingInline: 200 }} onClick={() => parent.deploy()}>Deploy</button>
      </div>
    );
  }
};

exports.Deploying = class extends React.Component {
  render() {
    return <div>Deploying... please wait.</div>;
  }
};

exports.WaitingForAttacher = class extends React.Component {
  async copyToClipboard(button) {
    const { ctcInfoStr } = this.props;
    navigator.clipboard.writeText(ctcInfoStr);
    const origInnerHTML = button.innerHTML;
    button.innerHTML = "Copied!";
    button.disabled = true;
    await sleep(1000);
    button.innerHTML = origInnerHTML;
    button.disabled = false;
  }

  render() {
    const { ctcInfoStr } = this.props;
    return (
      <div>
        Waiting for Attacher to join...
        <br /> Please give them this contract info:
        <textarea className="ContractInfo">{ctcInfoStr}</textarea>
        <button onClick={(e) => this.copyToClipboard(e.currentTarget)}>
          Copy to clipboard
        </button>
      </div>
    );
  }
};

export default exports;
