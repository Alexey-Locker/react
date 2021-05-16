import React, { Component } from 'react'
import Save from './Save/Save'
import "./Footer.scss"
import Group from './Group/Group'
import Topic from './Topic/Topic'
export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="footer__wrapper">
                    <Save />
                    <Group />
                    <Topic/>
                </div>
            </footer>
        )
    }
}
