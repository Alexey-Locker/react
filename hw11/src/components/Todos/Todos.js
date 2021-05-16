import React from 'react'
import { connect } from 'react-redux';
import { Route, Switch, useHistory } from "react-router-dom"
import { deleteTodos } from '../../store/todos/actions/actions';
import Forms from '../Form/Forms';
import TodosItem from './TodosItem';
import "./Todos.scss"
import AddIcon from '@material-ui/icons/Add';

function Todos({ list, dispatch }) {
    const history = useHistory();

    function toggleForm(id) {
        history.push("/" + id);
    }

    function deleteItem(id) {
        dispatch(deleteTodos(id));
    }


    return (
        <section className="todos">
            <div className="todos__head">
                <h1>Todos</h1>
                <AddIcon onClick={ () => history.push("/create") } />
            </div>
            <ul>
                {
                    list.map(
                        el => <TodosItem
                            key={ el.id }
                            item={ el }
                            deleteItem={ deleteItem }
                            toggleForm={ toggleForm }
                        />)
                }
            </ul>
            <Switch>
                <Route path="/:id">
                    <Forms />
                </Route>
            </Switch>
        </section>
    )
}

const mapStateToProps = ({ list }) => {
    return { list };
}
export default connect(mapStateToProps)(Todos)