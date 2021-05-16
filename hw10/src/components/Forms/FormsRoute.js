import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import Forms from './Forms'

export default function FormsRoute() {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route path={ path } exact>
                <Forms />
            </Route>
            <Route path={ `${path}/:userId` } exact>
                <Forms />
            </Route>
        </Switch>
    )
}
