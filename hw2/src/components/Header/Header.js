import React, { Component } from 'react'
import "./Header.scss"
export default class Header extends Component {
    state = { tabs:["Create Task", "Create Folder", "New Project"]}
    render() {
        return (
            <header className="header">
                <div className="header__faq">
                    <p>Status Names:</p>
                    <span>Done</span>
                    <span>Progress</span>
                </div>
                <ul className="header__control">
                    { this.state.tabs.map((el,index) => {
                        return <li key={index}>{ el }</li>
                        })}
                </ul>
            </header>
        )
    }
}
