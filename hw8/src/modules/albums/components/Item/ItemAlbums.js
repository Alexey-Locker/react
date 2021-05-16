import { makeStyles } from '@material-ui/core'
import React from 'react'

const useStyle = makeStyles((theme) => ({
    img: {
        width: theme.spacing(25),
    },
    wrapper: {
        marginRight: theme.spacing(1),
        position: "relative",
    },
    tile: {
        position: "absolute",
        color: "white",
        backgroundColor: "#0a0a0a75",
        padding: "2px 5px",
        margin: 0,
        width: "100%",
        fontSize: "12px",
        boxSizing: "border-box",
        bottom: 4,
        left: 0,
        "&:first-letter": {
            textTransform: "uppercase"
        }
    }
}))

export default function ItemAlbums({ album, image }) {
    const classes = useStyle();
    return (
        <div className={ classes.wrapper }>
            <img src={ image } alt={ album.title } className={ classes.img } />
            <p className={ classes.tile }>{ album.title }</p>
        </div>
    )
}
