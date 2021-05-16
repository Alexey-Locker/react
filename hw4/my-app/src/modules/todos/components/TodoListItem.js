import React from 'react';



export default function TodoListItem({ item, onDelete, onToggle }) {
    function onItemClick() {
        onToggle(item.id);
    };
    function onDeleteBtnClick(e) {
        e.stopPropagation();
        onDelete(item.id);
    };
    return (
        <li onClick={ onItemClick } style={ getItemStyle(item) }>
            <p>{ item.title }</p>
            <span onClick={ onDeleteBtnClick }>&#10060;</span>
        </li>
    )
}

function getItemStyle({ completed }) {
    return {
        cursor: 'pointer',
        backgroundColor: completed ? 'green' : 'yellow',
    };
}
