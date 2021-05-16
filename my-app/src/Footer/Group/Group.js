/* eslint-disable jsx-a11y/anchor-is-valid */

import React, { Component } from 'react'

export default class Group extends Component {
    render() {
        return (
            <div className="footer__group">
                <h3>Групы</h3>
                <a href="#"><p>Первобытное общество</p></a>
                <a href="#"><p>Древний мир</p></a>
                <a href="#"><p>Средние века</p></a>
            </div>
        )
    }
}
