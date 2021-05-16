import "./Main.scss";
import React, { Component } from 'react'
import Chats from "./Chats/Chats";
import History from "./History/History";

export default class Main extends Component {
    render() { 
        return (
            <main className="content">
                <Chats/>
                <History/>
            </main>
        )
    }
}
