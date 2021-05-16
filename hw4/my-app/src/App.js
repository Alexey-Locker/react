import React, { Component } from 'react';
import Todos from './modules/todos/components/Todos';
import "./App.scss";
export default class App extends Component {
    render() {
        return <Todos />;
    }
}
