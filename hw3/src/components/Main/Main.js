import React, { Component } from "react";
import { addItem, delItem, getItems, setItemId } from "../services";
import CRUDTable from "./CRUD/CRUDTable";
import Waiting from "../auxiliary/Waiting";
import Form from "./CRUD/Form";
export default class Main extends Component {
  state = {
    items: [],
    waiting: false,
    update: null,
  };
  render() {
    return (
      <>
        <main className="main">
          <CRUDTable
            items={this.state.items}
            removeItem={this.removeItem.bind(this)}
            updateItem={this.updateItem.bind(this)}
          />
        </main>
        <Form
          createItem={this.createItem.bind(this)}
          status={this.props.form}
          formActive={this.props.formActive}
          updateElement={this.state.update}
          updateItem={this.updateItem.bind(this)}
        />
        <Waiting status={this.state.waiting} />
      </>
    );
  }

  createItem(item) {
    const value = {
      name: item.name,
      surname: item.lastName,
      phone: item.phone,
    };
    this.setState({ waiting: true });
    addItem(value).then((item) => {
      this.setState({ waiting: false, items: [...this.state.items, item] });
    });
  }
  removeItem(id) {
    this.setState({ waiting: true });
    delItem(id).then(() => {
      this.setState({
        waiting: false,
        items: this.state.items.filter((el) => el.id !== id),
      });
    });
  }
  updateItem(item) {
    if (typeof item !== "object") {
      const value = this.state.items.find((el) => el.id === item);
      this.setState({ update: value });
      this.props.formActive();
    } else {
      this.setState({ update: null });
      this.setState({ waiting: true });
      setItemId({
        id: item.id,
        name: item.name,
        surname: item.lastName,
        phone: item.phone,
      }).then((resp) => {
        this.setState({
          waiting: false,
          items: this.state.items.map((el) =>
            el.id !== item.id
              ? el
              : {
                  ...el,
                  name: item.name,
                  surname: item.lastName,
                  phone: item.phone,
                }
          ),
        });
      });
    }
  }

  componentDidMount() {
    getItems().then((items) => {
      this.setState({ items });
    });
  }
}
