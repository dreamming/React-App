import React, { Component } from 'react';
import FlatButton from 'material-ui/lib/flat-button';
import TextField from 'material-ui/lib/text-field';
export default class Captcha extends Component {
    constructor(props) {
        super(props);
        this.id = 0;
        this.captchaDetail = this.props.captchaDetail.substr(0,1);
        this.state = {
            captcha: this.props.captchaUrl + this.props.captchaDetail +this.id,
            value: '',
            message: 'Captcha'
        }
        this.onHandleClick = this.onHandleClick.bind(this);
        this.onHandleChange = this.onHandleChange.bind(this);
    }

    onHandleChange(e) {
        
        let valueLength = e.target.value.length;
        let value = {
            value: e.target.value
        }

        if (valueLength != this.captchaDetail) {
            value.message = 'Wrong Length'
            this.props.loginFlag(false);

        }

        if (valueLength == this.captchaDetail) {
            value.message = 'Captcha'
            this.props.loginFlag(true);

        }

        this.setState(value);

    }

    onHandleClick() {
        this.id += 1;
        this.setState({
            captcha: this.props.captchaUrl + this.props.captchaDetail +this.id
        })
    }
    render() {
        return (
            <div>
                <TextField style={{ width: 165 }} value={this.state.value}
                    onChange={this.onHandleChange}
                    floatingLabelText={this.state.message}/>
                <FlatButton  onMouseDown={this.onHandleClick}>
                    <img style={{ 'margin-bottom': -10 }} src={this.state.captcha}/>
                </FlatButton>
            </div>
        )
    }
}