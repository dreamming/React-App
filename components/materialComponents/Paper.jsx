import React from 'react';
import Paper from 'material-ui/lib/paper';

const style = {
    height: 100,
    width: 100,
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
};

const PaperExampleSimple = () => (
    <div>
        <Paper style={style} zDepth={1}/>
        <Paper style={style} zDepth={2}/>
        <Paper style={style} zDepth={3}/>
        <Paper style={style} zDepth={4}/>
        <Paper style={style} zDepth={5}/>
        <Paper style={style} zDepth={1} rounded={false} circle={true}/>
        <Paper style={style} zDepth={2} rounded={false}/>
        <Paper style={style} zDepth={3} rounded={false}/>
        <Paper style={style} zDepth={4} rounded={false}/>
        <Paper style={style} zDepth={5} rounded={false}/>
    </div>
);

export default PaperExampleSimple;