import "./History.scss";
import React, { Component } from 'react'
import CardLeft from "./Card/Card-left";
import CardRight from "./Card/Card-right";
import Input from "./Input/Input";

export default class History extends Component {
    render() {
        return (
            <div className="content__history history">
                    <CardLeft/>
                    <CardRight />
                <Input/>
            </div>
        )
    }
}
