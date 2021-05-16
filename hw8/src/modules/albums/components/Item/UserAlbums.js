import React from 'react'
import ItemAlbums from './ItemAlbums'
import { Box, Container, makeStyles, Typography } from '@material-ui/core';
import img from "../../../../img/album.jpg"

const useStyles = makeStyles((theme) => ({
    albums: {
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "no-wrap",
        overflowX: "scroll",
        "&::-webkit-scrollbar": {
            width: "10px",
            height: "8px",
            backgroundColor: "#b5b9bd",
            borderRadius: "9em",

        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "#0c5656",
            borderRadius: "9em",
            boxShadow: "inset 1px 1px 10px #3f51b5",
        }
    }

}))
export default function UserAlbums({ user }) {
    const classes = useStyles();
    return (

        <Container size="lg">
            <Typography variant="h6">Creating by: { user.name }</Typography>
            <Box className={ classes.albums } pb={ 1 }>
                { user.albums.map(el => {
                    return <ItemAlbums key={ el.id } image={ img } album={ el } />
                }) }
            </Box>
        </Container>
    )
}
