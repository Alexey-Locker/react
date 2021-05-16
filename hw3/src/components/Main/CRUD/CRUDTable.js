import React, { Component } from "react";
import CRUDRow from "./CRUDRow";

export default class CRUDTable extends Component {
  render() {
    return (
      <table className="main__table">
        <tbody>
          <tr>
            <th>First Name</th>
            <th>Lastname</th>
            <th>Phone</th>
            <th> &nbsp; </th>
          </tr>
          {this.props.items.map((element) => {
            return (
              <CRUDRow
                key={element.id}
                item={element}
                removeItem={this.props.removeItem}
                updateItem={this.props.updateItem}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}
