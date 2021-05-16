import React from 'react'
import Form from './auxiliary/Form'
import { TheamProvider } from './context/themeContext'
import Header from './Header/Header'
import { useForm, useTodos } from './hooks/hooks'
import Main from './Main/Main'

export default function Todos() {
    const { deleteElement, controlElement, items, } = useTodos();
    const { activeForm, toggleForm } = useForm();
    return (
        <>
            <TheamProvider>
                <Header toggleForm={ toggleForm } />
                <Main toggleForm={ toggleForm } deleteElement={ deleteElement } items={ items } />
                { (!activeForm.hiden ? <Form item={ activeForm.update } controlElement={ controlElement } toggleForm={ toggleForm } /> : null) }
            </TheamProvider>
        </>
    )
}
