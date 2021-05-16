import React, { Component } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import "./components/styles/App.scss";
export default class App extends Component {
  state = { form: false };
  render() {
    return (
      <>
        <Header formActive={ this.formActive.bind(this) } />
        <Main form={ this.state.form } formActive={ this.formActive.bind(this) } />
      </>
    );
  }
  formActive() {
    this.setState({ form: !this.state.form });
  }
}
