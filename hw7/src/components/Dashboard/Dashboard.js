import React from 'react'
import { Link } from 'react-router-dom'
import "./Dashboard.scss"
export default function Dashboard() {
    return (
        <section className="dashboard">
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/albums">Albums</Link></li>
            </ul>
        </section>
    )
}
