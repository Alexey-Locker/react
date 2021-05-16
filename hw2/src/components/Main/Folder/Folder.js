import React, { Component } from 'react'

export default class Folder extends Component {
    render() {
        return (
            <div className="main__folder" >
                <h2>{ this.props.rows.nameFolder }</h2>
                <ul>
                    { this.props.rows.data.map(el => {
                       return  <li key={el.id} className={ ((el.completed) ? 'main__row_active ':"")+'main__row' }>
                           { el.title }
                           <div>
                               <input type="button" value="Edit"></input>
                               <input type="button" value="Delete" onClick={ () => { this.props.delElement(el.id, this.props.rows.nameFolder) }}></input>
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        )
    }
  
}
