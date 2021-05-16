import "./Chats.scss";
import React, { Component } from 'react'
import Card from "./Card/Card";
export default class Chats extends Component {
    render() {
        return (
            <div className = "content__chats chats">
                     <Card></Card>  
            </div>
        )
    }
}
