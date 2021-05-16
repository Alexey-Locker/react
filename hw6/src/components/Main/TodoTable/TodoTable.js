import React from 'react'
import TodoItem from './TodoItem'

export default function TodoTable({ items, toggleForm, deleteElement }) {
    return (
        <table>
            <thead>
                <tr><th>Name</th>
                    <th>Surname</th>
                    <th>Phone</th>
                    <th>&nbsp;</th>
                </tr>
            </thead>
            <tbody>
                { items.map(item => <TodoItem deleteElement={ deleteElement } toggleForm={ toggleForm } key={ item.id } item={ item } />) }
            </tbody>
        </table>
    )
}
