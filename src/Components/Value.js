import React, {Component} from 'react';
import InputField from './InputField';
import Numbers from './Numbers';
import './Value.css';

class Value extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            val1: 0,
            val2: 0
        }
    }
    numberChange(num1, num2){
        this.setState({val1: num1});
    }
    render() {
        return (
            <div className="App">
                <InputField val1={this.state.val1} value={this.state.number || ''} onChange={this.numberChange.bind(this)} />
                <Numbers onChange={this.numberChange.bind(this)} />
            </div>
        );
    }
}

export default Value;