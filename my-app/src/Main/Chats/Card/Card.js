import React, { Component } from 'react'
import image from "../../../img/user.jpg"

export default class Card extends Component {
    render() {
        return (
            <div className="chats__card">
                    <img src={image} alt = "Фото пользователя" className="chats__avatar"></img>
                    <div className="chats__description">
                        <span className="chats__name">Алексей</span>
                        <p className="chats__last-msg">Спасибо большое, очень крутые гриды, особенно в сочитании с флексами !</p>
                    </div>
                </div>      
        )
    }
}
