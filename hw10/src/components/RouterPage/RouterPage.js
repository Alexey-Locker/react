import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { ROUTS } from "./constants/constants"

export default function RouterPage() {
    return (
        <Router>
            <Switch>
                { ROUTS.map((el, index) => <Route key={ index } path={ el.link }>{ el.component }</Route>) }
            </Switch>
        </Router>
    )
}
