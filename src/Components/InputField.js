import React, {Component} from 'react';

class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    onChange(e) {
        console.log('onChange event fired');
        this.setState({
            number: e.target.value
        })
        this.props.onChange(this.state.number);
        console.log(this.state.number);
    }
    render() {
        return (
            <div className="inputField">
                <input type="number" value={this.props.val1 || ''} onChange={this.onChange.bind(this)}/>
            </div>
        );
    }
}

export default InputField;