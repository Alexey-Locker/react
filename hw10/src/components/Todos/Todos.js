import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory } from 'react-router';
import ItemTodos from './ItemTodos.js/ItemTodos';
import "./Todos.scss"
import { deleteTodo } from "../../common/store/todos/actions/action"
function Todos({ todos, dispatch }) {
    const { list } = todos;
    const history = useHistory()
    function onDelete(id) {
        dispatch(deleteTodo(id))
    }
    return (
        <section className="main">
            { list.map((el) => <ItemTodos onDelete={ onDelete } key={ el.id } item={ el } />) }
            <ul className="main__add" onClick={ () => history.push("/forms") }>
                <li >
                    +
                </li>
            </ul>
        </section>
    )
}

const mapsStateToProps = ({ todos }) => ({ todos });
export default connect(mapsStateToProps)(Todos);