import React, {Component} from 'react';
import {Button} from 'react-bootstrap';


class Numbers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.value
        }
    }
    number(e) {
        console.log('You\'ve pressed number ' + e.target.value);
        this.setState({
            number: e.target.value
        }, () => {
            this.props.onChange(this.state.number);
        })
    }
    render() {
        return (
            <div className="buttons">
                <Button variant="primary" value="3" onClick={this.number.bind(this)} style={{margin:'5px'}}>Start</Button>
                <Button bsStyle="primary" value="5" onClick={this.number.bind(this)} style={{margin:'5px'}}>+2</Button>
                <Button bsStyle="primary" value="9" onClick={this.number.bind(this)} style={{margin:'5px'}}>+4</Button>
                <Button bsStyle="primary" value="15" onClick={this.number.bind(this)} style={{margin:'5px'}}>+6</Button>
                <Button bsStyle="primary" value="23" onClick={this.number.bind(this)} style={{margin:'5px'}}>+8</Button>
                <Button bsStyle="primary" value="33" onClick={this.number.bind(this)} style={{margin:'5px'}}>+10</Button>
                <Button bsStyle="primary" value="45" onClick={this.number.bind(this)} style={{margin:'5px'}}>+12</Button>
                <Button bsStyle="primary" value="59" onClick={this.number.bind(this)} style={{margin:'5px'}}>+14</Button>
                <Button bsStyle="primary" value="75" onClick={this.number.bind(this)} style={{margin:'5px'}}>+16</Button>
            </div>
        );
    }
}

export default Numbers;