import { Container, Grid, List } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux'
import Item from './Item/Item';

import { useStyles } from '../common/style'

function TodoList({ todos, dispatch }) {
    const classes = useStyles();
    return (
        <Container className={ classes.wrapper } >
            <Grid container spacing={ 2 }>
                <Grid item xs={ 12 } md={ 6 }>
                    <List dense className={ classes.list } >
                        { todos.map(item => <Item key={ item.id } dispatch={ dispatch } item={ item } />) }
                    </List>
                </Grid>
            </Grid>
        </Container >
    )
}
function mapsStatetoProps(state) {
    return { todos: state.list }
}
export default connect(mapsStatetoProps)(TodoList);
