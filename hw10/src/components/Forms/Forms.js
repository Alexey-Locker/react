import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { addTodo, updateTodo } from '../../common/store/todos/actions/action';
import "./Forms.scss";
const DEFAULT_VALUE_INPUTS = {
    name: '',
    surname: '',
    phone: '',
    email: ''
}
function Forms({ todos, dispatch }) {
    const history = useHistory();
    const [value, setValue] = useState(DEFAULT_VALUE_INPUTS);
    const { userId } = useParams();

    function onEditInput({ target }) {
        setValue({ ...value, [target.name]: target.value });
    }
    function onSave(e) {
        e.preventDefault();
        history.push("/todos");
        if (value.id) {
            dispatch(updateTodo(value))
        } else {
            dispatch(addTodo(value));
        }
    }
    useEffect(
        () => {
            if (userId) {
                const users = todos.list.find(el => el.id === userId)
                if (users) {
                    setValue(users)
                }
            }
        }, [todos.list, userId]
    )

    return (
        <>
            <h2>Please fill out the form to save user</h2>
            <section className="forms" onSubmit={ onSave }>
                <form>
                    <div className="forms__inputs">
                        <input name="name" type="text" onInput={ onEditInput } placeholder="Name" value={ value.name } />
                        <input name="surname" type="text" onInput={ onEditInput } placeholder="Surname" value={ value.surname } />
                    </div>
                    <input name="phone" type="text" onInput={ onEditInput } placeholder="Phone" value={ value.phone } />
                    <input name="email" type="text" onInput={ onEditInput } placeholder="Email" value={ value.email } />
                    <div className="forms__buttons">
                        <input type="submit" value="Save" />
                        <input type="button" value="Cancel" onClick={ () => history.push("/todos") } />
                    </div>
                </form>
            </section>
        </>
    )
}
const mapsStateToProps = ({ todos }) => ({ todos });
export default connect(mapsStateToProps)(Forms);