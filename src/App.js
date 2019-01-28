import React, { Component } from 'react';
import Regular from './Regular.js';
import StyleOptions from './StyleOptions.js';
import './Regular.css';


let themes = {
    '0' : ['white', 'black'],
    '1' : ['green', 'green'],
    '2' : ['#FFD7F8', '#DCE5FF']
}

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fontColor: 'black',
            bgColor: 'white',
        }
    }

    setColor = (bg, font) => {
        this.setState({
            fontColor: font,
            bgColor: bg,
        });
    }

    render() {
        return (
            <div>
                <StyleOptions id="options" setColor={this.setColor}
                                themes={themes}></StyleOptions>
                <Regular fontColor={this.state.fontColor}
                        bgColor={this.state.bgColor}
                        setColor={this.setColor}></Regular>
            </div>
        );
    }
}

export default App;
