import React from 'react';
import { AppBar, Link, Container, Toolbar, Typography, makeStyles, Button } from '@material-ui/core'
import { Link as LinkRout, useHistory, useLocation } from 'react-router-dom';
import AddIcon from '@material-ui/icons/Add';
const useStyles = makeStyles((theme) => ({
    navLink: {
        textDecoration: 'none',
        color: 'white',
        marginRight: theme.spacing(1)
    },
    header: { minHeight: "40px" },
    addContact: {
        marginRight: theme.spacing(3),
        fontSize: 12,
        padding: "2px 10px"
    }
}))
export default function Header() {
    const classes = useStyles();
    const { pathname } = useLocation();
    const history = useHistory();
    function addContact() {
        history.push("/users/add");
    }
    return (
        <AppBar position="sticky"  >
            <Container>
                <Toolbar className={ classes.header }>
                    <Typography variant="h6" style={ ({ flexGrow: 1 }) } >
                        Albums to everyone
                </Typography>
                    { pathname === "/users" || pathname === "/users/" ?
                        <Button
                            variant="contained"
                            color="default"
                            className={ classes.addContact }
                            startIcon={ <AddIcon /> }
                            onClick={ addContact }
                        >Add</Button> : null }
                    <LinkRout to="/users" className={ classes.navLink }>
                        <Link component="button" color="inherit">Users</Link>
                    </LinkRout>
                    <LinkRout to="/albums" className={ classes.navLink }>
                        <Link component="button" color="inherit">Albums</Link>
                    </LinkRout>
                    <LinkRout to="/dashboard" className={ classes.navLink }>
                        <Link component="button" color="inherit">Dashboard</Link>
                    </LinkRout>

                </Toolbar>
            </Container>
        </AppBar>
    )
}
