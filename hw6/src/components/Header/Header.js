import React from 'react'
import { useTheme } from '../context/themeContext'

export default function Header({ toggleForm }) {
    const { typesColors, theme, toggleTheme, } = useTheme();
    const id = typesColors.indexOf(theme)
    function changeTheme({ target }) {
        toggleTheme(target.value)
    }
    return (
        <header className={ theme }>
            <h1>crud</h1>
            <div className="controls">
                <input value="&#10010;" type="button" onClick={ toggleForm }></input>
                <select onChange={ changeTheme } value={ id }>
                    { typesColors.map((item, index) =>
                        <option key={ index } value={ index } >{ item }</option>
                    ) }
                </select>
            </div>
        </header>
    )
}
