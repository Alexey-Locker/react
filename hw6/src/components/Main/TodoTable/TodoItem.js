import React from 'react'

export default function TodoItem({ item, toggleForm, deleteElement }) {
    let { name, surname, phone } = item;
    function editItem() {
        toggleForm(item)
    }
    function deleteItem() {
        deleteElement(item.id)
    }
    return (<>
        <tr>
            <td>{ name }</td>
            <td>{ surname }</td>
            <td>{ phone }</td>
            <td><input type="button" value="&#10006;" onClick={ deleteItem } /><input type="button" value="&#9998;" onClick={ editItem } /></td>
        </tr></>
    )
}
