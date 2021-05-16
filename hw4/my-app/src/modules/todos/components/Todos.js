import React, { useEffect, useState } from 'react';
import {
    createTodo,
    deleteTodo,
    getTodos,
    updateTodo,
} from '../services/todosService';
import TodoForm from './TodoForm';
import TodoList from './TodoList';



export default function Todos() {
    const [list, setList] = useState([]);

    useEffect(() => {
        getTodos().then((list) => setList(list));
    }, [])


    function toggleItem(id) {
        const item = list.find((el) => el.id === id);
        const newItem = { ...item, completed: !item.completed };
        updateTodo(newItem).then(() => {
            setList(list.map((item) => item.id !== id ? item : newItem));
        });
    };

    function deleteItem(id) {
        deleteTodo(id);
        setList(list.filter((item) => item.id !== id));
    };

    function createItem(newItem) {
        newItem.completed = false;

        createTodo(newItem).then((data) => {
            setList([...list, data]);
        });
    };

    return (
        <>
            <TodoList
                list={ list }
                onToggle={ toggleItem }
                onDelete={ deleteItem }
            />
            <TodoForm onSave={ createItem } />
        </>
    )
}


