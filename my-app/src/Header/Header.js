/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react'
import "./Header.scss";
import User from './User/User';
export default class Header extends Component {
    render() {
        return (
            <header className="header">
                 <User/>
                  <nav className = "header__menu">
                    <input type="checkbox" id="header__menu_toggle"/>
                    <ul>
                             <li><a href="#">Лента</a></li>
                             <li><a href="#">Сообщения</a></li>
                             <li><a href="#">События</a></li>
                             <li><a href="#">Настройки</a></li>
                    </ul>
                    <label className="header__menu-wrapper" htmlFor="header__menu_toggle">
                      <span></span>
                    </label>
                  </nav>
              </header>
        )
    }
}
