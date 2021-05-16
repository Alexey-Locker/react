import React, { Component } from 'react'
import Folder from './Folder/Folder'
import "./Main.scss"
export default class Main extends Component {
    render() {
        return (
            <main className="main">
                {this.props.data.map((el) => {
                    return <Folder key={ el.nameFolder } rows={ el } delElement={ this.props.delElement}/>
                }) }

            </main>
            
        )
    }
}
