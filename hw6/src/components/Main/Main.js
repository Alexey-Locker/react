import React from 'react'
import { useTheme } from '../context/themeContext';
import TodoTable from './TodoTable/TodoTable'

export default function Main({ items, toggleForm, deleteElement }) {
    const { theme } = useTheme();

    return (
        <section className={ `main ${theme}` }>
            <TodoTable toggleForm={ toggleForm } deleteElement={ deleteElement } items={ items } />
        </section>
    )
}
