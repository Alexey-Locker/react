/* eslint-disable jsx-a11y/anchor-is-valid */
import userImg from "../../img/user.jpg"
import React, { Component } from 'react'

export default class User extends Component {
    render() {
        return (
             <a href="#" className="header__user">
                <img src={ userImg } alt="Фото пользователя" className="header__avatar"></img>
                <p>Алексей Гажийский</p>
             </a>
        )
    }
}
