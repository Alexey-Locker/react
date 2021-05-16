import React, { Component } from "react";

export default class Waiting extends Component {
  render() {
    const status = this.props.status;
    return (
      <div
        className={
          status
            ? "waiting__loading waiting__loading_active"
            : "waiting__loading"
        }
      >
        <span></span>
      </div>
    );
  }
}
