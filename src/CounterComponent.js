import React, { Component } from 'react';

export default class CounterComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, isRunning: true };
    }

    //increment
    increment = () => {
        // setInterval(() => {
        this.setState({ count: this.state.count + 1 });
        // }, 2000);
    };
    increase = () => {
        this.up = setInterval(this.increment, 2000);
    };

    //decrement
    decrement = () => {
        if (this.state.count > 0) {
            // setInterval(() => {
            this.setState({ count: this.state.count - 1 });
            // }, 2000);
        }
    };

    decrease = () => {
        this.down = setInterval(this.decrement, 2000);
    };

    // stop
    stop = () => {
        clearInterval(this.up);
        clearInterval(this.down);
        this.setState({ isRunning: false });
    };

    render() {
        return (
            <>
                <h1>Counter App</h1>
                <p id="counter">{this.state.count}</p>
                <hr />
                <button onClick={this.increase}> + </button>
                <button onClick={this.decrease}> - </button>
                <button onClick={this.stop}> Stop </button>
            </>
        );
    }
}
