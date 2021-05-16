import React from 'react'
import UserAlbums from './Item/UserAlbums';
import { useAlboms } from '../common/hooks/hooks';
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
export default function Albums() {
    const { albumsUsers, loading } = useAlboms();
    const classes = useStyles();

    return (
        <>
            <section className="albums">
                { albumsUsers.map((el) => <UserAlbums key={ el.userId } user={ el } ></UserAlbums>) }
            </section>
            { (loading) ? <Box className={ classes.loading }><CircularProgress /></Box> : null }
        </>
    )
}
