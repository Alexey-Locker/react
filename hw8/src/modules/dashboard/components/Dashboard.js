import { makeStyles } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    route: {
        width: "100",
        display: "flex",
        justifyContent: "center",
    },
    link: {
        color: theme.palette.primary,
        marginRight: theme.spacing(2)
    }
}))
export default function Dashboard() {
    const classes = useStyles();
    return (
        <section className={ classes.route }>
            <Link to="/users" className={ classes.link }>Users</Link>
            <Link to="/albums" className={ classes.link }>Albums</Link>
        </section>
    )
}
