import React from 'react'
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
export default function TodosItem({ item, toggleForm, deleteItem }) {
    function onEdit() {
        toggleForm(item.id)
    }
    function onDelete() {
        deleteItem(item.id);
    }
    return (
        <li className={ item.isDone ? "todos_active" : null }>
            {item.title }
            <div>
                <EditIcon onClick={ onEdit } />
                <DeleteIcon onClick={ onDelete } />
            </div>
        </li>
    )
}
