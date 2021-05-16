import React from 'react'
import { useHistory } from 'react-router';


export default function ItemTodos({ item, onDelete }) {
    const name = `${item.name} ${item.surname}`;
    const history = useHistory();

    return (
        <ul>
            <li title={ name }>{ name }</li>
            <li>{ item.phone }</li>
            <li>{ item.email }</li>
            <li> <input type="button" value="edit" onClick={ () => history.push("/forms/" + item.id) } />
                <input type="button" value="delete" onClick={ () => onDelete(item.id) } />
            </li>
        </ul>
    )
}
