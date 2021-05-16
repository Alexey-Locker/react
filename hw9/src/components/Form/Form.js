import { Button, Container, makeStyles, TextField, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { connect } from 'react-redux';
import { useStyles } from '../common/style'
import { itemAdd } from '../store/actions/actions';

const useStylesForm = makeStyles((theme) => ({
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        position: "relative",
        padding: "10px 0",
        "&::before": {
            content: `''`,
            position: 'absolute',
            left: '0',
            bottom: '-10px',
            width: '100%',
            height: '2px',
            backgroundColor: theme.palette.primary.main
        },
        "&::after": {
            content: `''`,
            position: 'absolute',
            left: '0',
            top: '0px',
            width: '100%',
            height: '2px',
            backgroundColor: theme.palette.primary.main
        }
    },
    mrb: {
        marginBottom: theme.spacing(1)
    }
}))
function Form({ dispatch }) {
    const [inputValue, setInputValue] = useState("");
    const classes = useStyles()
    const classesForm = useStylesForm();
    function onEditInput({ target }) {
        setInputValue(target.value);
    }
    function onSave(e) {
        setInputValue("")
        dispatch(itemAdd(inputValue))
    }
    return (
        <Container className={ classes.wrapper } >
            <form className={ classesForm.form } noValidate autoComplete="off" >
                <Typography className={ classesForm.mrb }>Add task</Typography>
                <TextField
                    className={ classesForm.mrb }
                    id="standard-password-input"
                    label="Title"
                    autoComplete="current-password"
                    onInput={ onEditInput }
                    value={ inputValue }
                />
                <Button onClick={ onSave } variant="contained">Save</Button>
            </form>
        </Container>
    )
}
export default connect()(Form);