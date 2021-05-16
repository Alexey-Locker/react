import React, { Component } from "react";

export default class CRUDRow extends Component {
  render() {
    let item = this.props.item;
    return (
      <tr>
        <td>{item.name}</td>
        <td>{item.surname}</td>
        <td>{item.phone}</td>
        <td>
          <div>
            <input
              type="button"
              value="&#9997;"
              onClick={() => this.update(item.id)}
            ></input>
            <input
              type="button"
              value="&#128465;&#65039;"
              onClick={() => {
                this.delete(item.id);
              }}
            ></input>
          </div>
        </td>
      </tr>
    );
  }
  delete(id) {
    this.props.removeItem(id);
  }
  update(id) {
    this.props.updateItem(id);
  }
}
