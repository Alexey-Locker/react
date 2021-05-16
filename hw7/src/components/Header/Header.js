import React from 'react'
import { NavLink } from "react-router-dom"
import "./Header.scss"
export default function Header() {
    return (
        <header><h1>Albums to everyone</h1> <nav><ul>
            <li><NavLink activeClassName="active" to="/users">Users</NavLink></li>
            <li><NavLink activeClassName="active" to="/albums">Albums</NavLink></li>
            <li><NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink></li>
        </ul></nav> </header>

    )
}
