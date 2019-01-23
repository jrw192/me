import React, { Component } from 'react';
import Regular from './Regular.js'
import './Regular.css'


class App extends Component {

    /*state = {
        fontColor: 'black',
        bgColor: 'white',
    }

    FrogColor = () => {
        var newFont = '#39D1B4';
        var newBG = '#39D1B4';
        this.setState({
            fontColor: newFont,
            bgColor: newBG,
        });
        console.log("font: " + this.state.fontColor + " bg: " + this.state.bgColor);
    }*/

    render() {
        return (
            <Regular></Regular>
        );
    }
}

export default App;
