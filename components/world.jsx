import React from 'react';
import ReactDOM from 'react-dom';

class World extends React.Component {
    render() {
        return <h1>{this.props.name}</h1>
    }
}

ReactDOM.render(<World name="world"/>, document.getElementById('world'));