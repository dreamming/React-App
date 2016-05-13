import React from 'react';
import ReactDOM from 'react-dom';
class PhoneCall extends React.Component {
    render() {
        return (
            <div className="phone-call">
                <h4 className="call-SID">
                    {"Call SID: " + this.props.callSid}
                </h4>
            </div>
        );
    }
};
export default PhoneCall;