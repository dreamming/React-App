import React, { Component } from 'react';
import FSS from './LoginBackground';
import LoginComponent from './LoginComponent';
import Constant from '../../util/category';
const LoginpageStyles = {
    container: {
        position: 'absolute',
        height: '100%',
        width: '100%'
    },
    output: {
        opacity: '0.2',
        width: '100%',
        height: '100%'
    },
    login: {
        textAlign: 'center'
    }
}

class LoginPage extends Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        FSS("container", "output");
        // $("body").css("background-color", 'rgb(255,64,129)');
        document.body.style.backgroundColor="rgb(68,138,255)";
    }
    render() {
        return (
            <div>
                <div id="container" style={LoginpageStyles.container}>
                    <div id="output" style={LoginpageStyles.output}>
                    </div>
                </div>
                <div style={LoginpageStyles.login}>
                    <LoginComponent imageUrl={this.props.imageUrl} 
                           loginUrl={this.props.loginUrl} 
                           image={this.props.image}
                           captchaUrl={this.props.captchaUrl}
                           avatarLocation={this.props.avatarLocation}
                           captchaDetail={this.props.captchaDetail}/>
                </div>
            </div>
        )
    }
}
LoginPage.defaultProps={
                        loginUrl:'http://localhost:9988/LoginFront/loginName/',
                        image:'',
                        imageUrl:'http://localhost:9988/LoginFront/loginPhoto/',
                        captchaUrl:'http://localhost:9988/LoginFront/captcha/',
                        captchaDetail:Constant.captchaDetail,
                        avatarLocation:Constant.avatarLocation
                       };
export default LoginPage;