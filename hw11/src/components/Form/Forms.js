import { Formik, Form } from 'formik'
import React from 'react'
import TextFieldForFormik from '../../common/TextFieldForFormik/TextFieldForFormik'
import validate, { isNumber } from "validate.js";
import { Button, makeStyles } from '@material-ui/core';
import SelectForFormik from '../../common/SelectForFormik/SelectForFormik';
import { connect } from 'react-redux';
import { useHistory, withRouter } from 'react-router';
import "./Forms.scss"
import { createTodos } from '../../store/todos/actions/actions';

const constraints = {
    title: {
        length: {
            maximum: 255,
            minimum: 3,
            tooShort: "is too short(3)",
            tooLong: "is too long (255)"
        }
    },
    isDone: {
        presence: { allowEmpty: false }
    }
}

const useStyles = makeStyles((theme) => ({
    input: {
        marginBottom: theme.spacing(2),
        width: "100%"
    },

}))

function Forms({ todo, dispatch }) {
    const history = useHistory();
    const classes = useStyles();

    function onSubmit(values) {
        history.push("/");
        dispatch(createTodos(values))
    }

    function onCancel() {
        history.push("/");

    }
    return (
        <div className="forms">
            <Formik
                enableReinitialize
                initialValues={ todo || { title: "", isDone: "" } }
                validate={ (values) => {
                    return validate(values, constraints);
                } }
                onSubmit={ onSubmit }
            >
                <Form>
                    <h2>Edit todо</h2>
                    <TextFieldForFormik
                        className={ classes.input }
                        label="Multiline"
                        name="title"
                        multiline
                        rowsMax={ 4 } />
                    <SelectForFormik native
                        name="isDone"
                        className={ classes.input }
                        inputProps={ {
                            name: 'isDone',
                            id: "status"
                        } }>

                        <option value="" >Select status</option>

                        <option value={ true }>Done</option>

                        <option value={ false }>In proggres</option>

                    </SelectForFormik>
                    <div>
                        <Button type="submit">Save</Button>
                        <Button onClick={ onCancel }>Cancel</Button>
                    </div>
                </Form>
            </Formik>
        </div>
    )
}
const mapStateToProps = ({ list }, { match }) => {
    const { id } = match.params;
    let todo = null;
    if (isNumber(id)) {
        todo = list.find(el => el.id === id)
    }

    return { todo }
}
export default withRouter(connect(mapStateToProps)(Forms))