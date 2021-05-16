
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import React, { Component } from 'react'

export default class App extends Component {
  state = {
    app: [{
      nameFolder: "What should i must do in summer", data: [
        {
          id: "14",
          title: "Costa Rican Colon North Carolina parsing",
          completed: true
        },
        {
          id: "16",
          title: "Industrial indexing context-sensitive",
          completed: false
        },
        {
          id: "18",
          title: "North Korean Won",
          completed: false
        },
        {
          id: "19",
          title: "Wooden Indiana",
          completed: true
        },
        {
          id: "20",
          title: "Assistant actuating implement",
          completed: false
        }
      ]
    }]
}
  
  render() {
    return (
      <>
        <Header />
        <Main data={ this.state.app } delElement={ this.delElement.bind(this) }/>
      </>
    )
  }
  delElement(id, folder) {

    this.setState((state) => {
      return {
        app: state.app.map(el => {
          if (el.nameFolder === folder) {
            return { nameFolder: folder, data: el.data.filter(row => row.id !== id) }
          }
          return el;
        })
      }
    })
  }
}

