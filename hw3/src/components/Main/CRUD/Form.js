import React, { Component } from "react";

export default class Form extends Component {
  state = {
    name: "",
    lastName: "",
    phone: "",
    update: false,
  };
  render() {
    return (
      <div
        className={
          "form__wrapper " + (this.props.status ? "form__wrapper_active" : "")
        }
      >
        <form onSubmit={(e) => this.submit(e)}>
          <h2>Add Contact</h2>
          <div className="form__data">
            <input
              name="name"
              placeholder="First Name"
              value={this.state.name}
              onChange={(e) => this.changeInput(e)}
            ></input>
            <input
              name="lastName"
              placeholder="Lastname"
              value={this.state.lastName}
              onChange={(e) => this.changeInput(e)}
            ></input>
            <input
              name="phone"
              placeholder="Phone"
              type="text"
              value={this.state.phone}
              onChange={(e) => this.changeInput(e)}
            ></input>
          </div>
          <div className="form__control">
            <input type="submit" value="Save"></input>
            <input
              type="button"
              value="Cancel"
              onClick={this.props.formActive}
            ></input>
          </div>
        </form>
      </div>
    );
  }
  submit(e) {
    e.preventDefault();
    if (this.state.update) {
      this.props.updateItem({
        id: this.props.updateElement.id,
        name: this.state.name,
        lastName: this.state.lastName,
        phone: this.state.phone,
      });
      this.setState({ name: "", lastName: "", phone: "" });
      this.setState({ update: false });
    } else {
      this.props.createItem(this.state);
      this.setState({ name: "", lastName: "", phone: "" });
    }
    this.props.formActive();
  }
  changeInput(e) {
    const nameInput = e.target.name;
    const value = e.target.value;
    this.setState({ [nameInput]: value });
  }

  updateForm() {
    const updateItem = this.props.updateElement;
    if (updateItem && !this.state.update) {
      this.setState({
        name: updateItem.name,
        lastName: updateItem.surname,
        phone: updateItem.phone,
        update: true,
      });
    }
  }
  componentDidUpdate() {
    this.updateForm();
  }
}
