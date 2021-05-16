import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <h1>crud</h1>
        <p onClick={this.props.formActive}>&#10010;</p>
      </header>
    );
  }
}
