/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'

export default class Topic extends Component {
    render() {
        return (
            <div className="footer__topic">
                <h3>Обсуждаемые темы</h3>
                <a href="#"><p>Как взломать пентагон</p></a>
                <a href="#"><p>Сколько будет длиться карантин</p></a>                
            </div>
        )
    }
}
