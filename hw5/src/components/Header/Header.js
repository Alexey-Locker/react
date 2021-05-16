import React from 'react'

export default function Header({ createKeep }) {
    return (
        <header>
            <h1>Keep</h1>
            <input type="button" onClick={ createKeep } value="Add"></input>
        </header>
    )
}

