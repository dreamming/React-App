import React, { Component } from 'react';
import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Avatar from 'material-ui/lib/avatar';
import Divider from 'material-ui/lib/divider';
import RefreshIndicator from 'material-ui/lib/refresh-indicator';
import Paper from 'material-ui/lib/paper';
import LoginCaptcha from './LoginCaptcha';
import $ from 'jquery';
const LoginFormStyles = {

    loginButton: {
        'backgroundColor': 'rgb(0,188,212)',
        'margin-top': '12',
        'margin-left': '80',

    },
    registeButton: {
        'backgroundColor': 'rgb(0,188,212)',
        'margin-top': '12',
        'margin-left': '10',
    },
    avatar: {
        'margin-top': '25',
        'margin-bottom': '-30',
        'width': 75,
        'height': 75
    },
    TextInput:{
        'margin-bottom':'-10'
    }


}
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loginName: '',
            passwd: ''
        }
        this.onHandleLogin = this.onHandleLogin.bind(this);
        this.onHandleNameChange = this.onHandleNameChange.bind(this);
        this.onHandlePasswdChange = this.onHandlePasswdChange.bind(this);
        this.shouldLogin = this.shouldLogin.bind(this);
    }
    
    shouldLogin(flag){
        this.loginFlag = flag;
    }
    
    onHandleNameChange(e) {
        this.setState({
            loginName: e.target.value
        });
    }

    onHandlePasswdChange(e) {
        this.setState({
            passwd: e.target.value
        });
    }
    
    onHandleLogin() {
        
        if (!(this.state.loginName && this.state.passwd && this.loginFlag)) {
            return;
        }
        $.ajax({
            url: this.props.url,
            headers: { 'Content-Type': 'application/json' },
            dataType: 'json',
            type: 'POST',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(this.state),
            success: (response) => {
                if (!response.meta.success) {
                    this.props.loginFailure(response.meta.message);
                } else {
                    // Login Success.
                    alert("Login SuCCESS");
                }
            },
            error: (xhr, status, err) => {
                // Error Html.
                console.error(this.props.submiturl, status, err.toString());
            }
        });
    }

    render() {
        return (
            <div>
                <div>
                    <Avatar style={LoginFormStyles.avatar} src={this.props.image}/>
                </div>
                <div>
                
                    <TextField style={LoginFormStyles.TextInput} value={this.state.loginName}  errorText={this.props.errorName}
                        onChange={this.onHandleNameChange} onBlur={this.props.onBlurName}
                        floatingLabelText="Name"/>
                    <TextField style={LoginFormStyles.TextInput} value={this.state.passwd}  errorText={this.props.errorPasswd}
                        onChange={this.onHandlePasswdChange } type="password"
                        onBlur={this.props.onBlurPasswd}
                        floatingLabelText="Password"/>


                    <LoginCaptcha loginFlag={this.shouldLogin} captchaUrl={this.props.captchaUrl}
                                  captchaDetail={this.props.captchaDetail}/>
                </div>

                <div>

                    <RaisedButton label="Login" style={LoginFormStyles.loginButton}
                        secondary={true} onMouseDown={this.onHandleLogin}/>

                    <RaisedButton label="Register" style={LoginFormStyles.registeButton}
                        primary={true}/>
                </div>
            </div>
        )
    }
}
export default Login;