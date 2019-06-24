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
                <Button variant="primary" value="3" onClick={this.number.bind(this)}>1</Button>
                <Button bsStyle="primary" value="5" onClick={this.number.bind(this)}>2</Button>
                <Button bsStyle="primary" value="9" onClick={this.number.bind(this)}>3</Button>
                <Button bsStyle="primary" value="15" onClick={this.number.bind(this)}>4</Button>
                <Button bsStyle="primary" value="23" onClick={this.number.bind(this)}>5</Button>
                <Button bsStyle="primary" value="33" onClick={this.number.bind(this)}>6</Button>
                <Button bsStyle="primary" value="45" onClick={this.number.bind(this)}>7</Button>
                <Button bsStyle="primary" value="59" onClick={this.number.bind(this)}>8</Button>
                <Button bsStyle="primary" value="75" onClick={this.number.bind(this)}>9</Button>
            </div>
        );
    }
}

export default Numbers;