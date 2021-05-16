import React from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom"
import Albums from './modules/albums/components/Albums'
import Header from './modules/commons/components/Header/Header'
import NotFound from './modules/commons/components/NotFound'
import Dashboard from './modules/dashboard/components/Dashboard'
import Users from './modules/users/components/Users/Users'

export default function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/albums">
          <Albums />
        </Route>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/" exect>
          <Redirect to="/dashboard" />
        </Route>
      </Switch>
    </Router>
  )
}

