import React, { Component } from 'react';
import Paper from 'material-ui/lib/paper';
// import TextField from 'material-ui/lib/text-field';
import RaisedButton from 'material-ui/lib/raised-button';
import Avatar from 'material-ui/lib/avatar';
import LoginForm from './LoginForm';
import $ from 'jquery';
const LoginComponentStyles = {
    paper: {
        height: 380,
        width: 350,
        margin: 100,
        textAlign: 'center',
        display: 'inline-block',
        // 'background-color':'#FFFFFFFF'
    }

}
class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            image: this.props.image,
            errorNameMessage: '',
            errorPasswdMessage: '',
        };
        this.onHandleNameValid = this.onHandleNameValid.bind(this);
        this.onHandlePasswdValid = this.onHandlePasswdValid.bind(this);
        this.loginFailure = this.loginFailure.bind(this);
    }

    loginFailure(error) {
        this.setState({
            errorPasswdMessage: error
        })
    }

    getLoginPhoto(loginName) {

        $.ajax({
            url: this.props.imageUrl,
            headers: { 'Content-Type': 'application/json' },
            dataType: 'json',
            type: 'POST',
            async: true,
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify({ loginName: loginName }),
            success: (response) => {

                if (response.meta.success) {
                    this.setState({ image: this.props.avatarLocation + response.data });
                } else {
                    this.setState({ image: response.data });
                }


            },
            error: (xhr, status, err) => {
                console.error(this.props.submiturl, status, err.toString());
            }
        });
    }
    onHandleNameValid(e) {
        let name = e.target.value;

        if (name) {
            this.getLoginPhoto(name);
            this.setState({
                errorNameMessage: ''
            })
        } else {
            this.setState({
                errorNameMessage: 'Name Can Not Empty'
            })
        }
    }

    onHandlePasswdValid(e) {
        let passwd = e.target.value;
        if (passwd) {
            this.setState({
                errorPasswdMessage: ''
            })
        } else {
            this.setState({
                errorPasswdMessage: 'Passwd Can Not Empty'
            })
        }
    }

    render() {
        return (
            <Paper style={LoginComponentStyles.paper} zDepth={4}>
                <LoginForm url={this.props.loginUrl} image={this.state.image}
                    errorName={this.state.errorNameMessage}
                    errorPasswd={this.state.errorPasswdMessage}
                    onBlurName={this.onHandleNameValid}
                    onBlurPasswd={this.onHandlePasswdValid}
                    loginFailure={this.loginFailure}
                    captchaUrl={this.props.captchaUrl}
                    captchaDetail={this.props.captchaDetail}
                    />
            </Paper>
        )
    }
}
export default Login;