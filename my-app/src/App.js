import React, { Component } from 'react'
import Footer from './Footer/Footer'
import Header from "./Header/Header"
import Main from './Main/Main'

export default class App extends Component {
  render() {
    return [<Header/>, <Main/>,<Footer/> ]
      
      

  }
}
