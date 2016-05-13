import React from 'react';
import AppBar from 'material-ui/lib/app-bar';
const FootComponentStyles = {
    appbar: {
        'height': 80,
        'position': 'absolute',
        'width': '100%',
        'bottom':0
    }
}
const FootComponent = (props) => (
    <AppBar showMenuIconButton={false} style={FootComponentStyles.appbar}/>
)
export default FootComponent;