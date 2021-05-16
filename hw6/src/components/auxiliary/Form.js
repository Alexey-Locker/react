import React, { useState } from 'react'
import { useTheme } from '../context/themeContext'

export default function Form({ item, toggleForm, controlElement }) {

    const [data, setData] = useState({
        name: item.name || "",
        surname: item.surname || "",
        phone: item.phone || "",
        id: item.id
    })
    const { theme } = useTheme();
    function onInput({ target }) {
        const { value, name } = target
        setData({ ...data, [name]: value })
    }

    function onSubmit(e) {
        e.preventDefault();
        controlElement(data);
        toggleForm();
    }

    return (
        <div className={ `form ${theme}` }>
            <form>
                <p>{ !item.name ? "Create contact" : "Update contact" }</p>
                <div className="form__data">
                    <p>Name</p>
                    <input type="text" name="name"
                        onInput={ onInput } value={ data.name } placeholder="Name" />
                    <p>Surname</p>
                    <input type="text" name="surname" onInput={ onInput } value={ data.surname } placeholder="Surname" />
                    <p>Phone</p>
                    <input type="text" name="phone" onInput={ onInput } value={ data.phone } placeholder="Phone" />
                </div>
                <div className="form__controls">
                    <input type="button" value="Cancel" onClick={ toggleForm } />
                    <input type="submit" value="Save" onClick={ onSubmit } />
                </div>
            </form>
        </div>
    )
}
