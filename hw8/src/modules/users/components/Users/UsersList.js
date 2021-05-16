import React from 'react';
import { useDataBase } from '../../../../common/hooks/hooks';
import UsersItem from './UsersItem';
import { URL_USERS } from '../common/constants';
import { Box, CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    loading: {
        position: "absolute",
        top: 0,
        left: 0,
        background: "#0000004a",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
}))

export default function UsersList() {
    const { items, itemDelete, loading } = useDataBase(URL_USERS)
    const classes = useStyles();
    return (
        <>
            <section>
                { items.map((item) => <UsersItem user={ item } key={ item.id } userDelete={ itemDelete } />) }
            </section>
            { (loading) ? <Box className={ classes.loading }><CircularProgress /></Box> : null }
        </>
    )
}
