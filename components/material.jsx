import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Buttons from './materialComponents/Buttons';
import RaisedButton from './materialComponents/RaiseButtons';
import FlatingButton from './materialComponents/FlatingButtons';
import IconButton from './materialComponents/IconButtons';
import DatePick from './materialComponents/DatePicks';
import Dialog from './materialComponents/Dialog';
import LeftNav from './materialComponents/LeftNav';
import List from './materialComponents/List';
import Paper from './materialComponents/Paper';
import TextField from './materialComponents/TextField';
import Tabs from './materialComponents/Tabs';
import Tabs2 from './materialComponents/Tabs2';
import Table from './materialComponents/Tables';
import LoginPage from './Login/LoginPage';
import IndexPage from './Index/IndexPage';
class Material extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
            
                {
                    // <Buttons/>
                    // <RaisedButton/>
                    // <FlatingButton />
                    // <IconButton />
                    // <DatePick/>
                    // <Dialog/>
                    // <LeftNav/>
                    // <List/>
                    // <Paper/>
                    // <TextField/>
                    // <Tabs/>
                    // <Tabs2/>
                    // <Table/>
                    // <LoginPage/>
                    // <IndexPage/>
                }
                <IndexPage/>
                
            </div>
        )
    }
}
injectTapEventPlugin();
ReactDOM.render(<Material />, document.getElementById('material'));