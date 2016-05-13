import React from 'react';
import ReactDOM from 'react-dom';
class Hello extends React.Component {
    constructor() {
        super();
    }
    render() {
        return <h1>{this.props.name}</h1>
    }
}
ReactDOM.render(<Hello name="dmz" />, document.getElementById('hello'));