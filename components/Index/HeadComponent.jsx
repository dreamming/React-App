import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import ContentAdd from 'material-ui/lib/svg-icons/content/add';
const HeadStyles = {
    appbar: {
        'height': 100,
        'background-color': '#673AB7'
    },
    add: {
        'position': 'absolute',
        'right': '190px',
        'top': '280px',
        'z-index':10000
    }
}
const HeadComponent = (props) => (
    <div>
        <AppBar
            style={HeadStyles.appbar}
            title={props.name}
            showMenuIconButton={false}
            />
        <FloatingActionButton style={HeadStyles.add}>
            <ContentAdd />
        </FloatingActionButton>
    </div>
);

export default HeadComponent;