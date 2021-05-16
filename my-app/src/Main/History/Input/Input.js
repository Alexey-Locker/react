import React, { Component } from 'react'

export default class Input extends Component {
    render() {
        return (
            <div className="history__input">
                <textarea placeholder="Отправить сообщение"></textarea>
            </div>
        )
    }
}
