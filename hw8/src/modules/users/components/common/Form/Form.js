import { Button, Container, makeStyles, TextField, Typography, Box, CircularProgress } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router'
import { useUser } from '../hooks/hooks';
import SaveIcon from '@material-ui/icons/Save';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
    },
    input: {
        marginTop: theme.spacing(2),
    },
    buttonWrapper: {
        marginTop: theme.spacing(2),
    },
    button: {
        width: `50%`
    },
    content: {
        marginTop: theme.spacing(5)
    },
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
export default function Form() {
    const history = useHistory();
    const { userId } = useParams();
    const classes = useStyles();
    const { user, setUser, updateUser, addUser, loading, error } = useUser(userId);

    useEffect(() => {
        if (error.status === 404) {
            history.push("/404");
        }
    }, [error, history])

    function onInput({ target }) {
        setUser((state) => {
            return { ...state, [target.name]: target.value }
        })
    }

    function onSubmit() {
        if (!user.id) {
            addUser().then(() => {
                history.push("/users")
            });
        } else {
            updateUser().then(() => {
                history.push("/users")
            });
        }

    }

    return (<>
        <Container maxWidth="sm" className={ classes.content } >
            <form className={ classes.root }>
                <Typography variant="h5" component="h5">
                    User management
               </Typography>
                <TextField id="standard-name" name="name" label="Name" onChange={ onInput } className={ classes.input } value={ user.name } />
                <TextField name="email" label="Email" onChange={ onInput } className={ classes.input } value={ user.email } />
                <TextField name="phone" label="Phone" onChange={ onInput } className={ classes.input } value={ user.phone } />
                <div className={ classes.buttonWrapper }>
                    <Button variant="contained" color="primary" size="small" className={ classes.button } startIcon={ <SaveIcon /> } onClick={ onSubmit }> Save </Button>
                    <Button variant="contained" color="secondary" size="small" className={ classes.button } startIcon={ <CloseIcon /> } onClick={ () => history.push("/users") }> Cancel</Button>
                </div>
            </form>
        </Container>
        { (loading) ? <Box className={ classes.loading }><CircularProgress /></Box> : null }
    </>
    )
}
