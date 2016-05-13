import React, {Component} from 'react';
import DatePicker from 'material-ui/lib/date-picker/date-picker';

class DatePickerExampleSimple extends Component {
    constructor(props) {
        super(props);
        this.state = {
            controlledDate: new Date(),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event, date) {
        this.setState({
            controlledDate: date,
        });
        console.log(date);
    }

    render() {
        return (
            <div>
                <DatePicker autoOk={true} hintText="Portrait Dialog" />
                <DatePicker hintText="Landscape Dialog" mode="landscape" />
                <DatePicker hintText="Dialog Disabled" disabled={true} />
                <DatePicker hintText="Portrait Inline Dialog" container="inline" />
                <DatePicker value={this.state.controlledDate} onChange={this.handleChange} autoOk={true} hintText="Landscape Inline Dialog" container="inline" mode="landscape" />
            </div>
        )
    }
}
export default DatePickerExampleSimple;