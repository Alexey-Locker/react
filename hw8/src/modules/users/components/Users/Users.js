import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import UsersList from './UsersList'
import Form from '../common/Form/Form';
export default function Users() {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route path={ path } exact >
                <UsersList />
            </Route>
            <Route path={ path + '/:userId' }>
                <Form />
            </Route>
        </Switch>
    )
}
