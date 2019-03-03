import React, { Component } from 'react';
import Regular from './components/Regular.js';
import Projects from './components/Projects.js';
import StyleOptions from './components/StyleOptions.js';
import PaintCanvas from './components/PaintCanvas.js'
import './App.css';
import data from './static/data/myProjects.json';


let themes = {
    '0' : ['#bababa', '#fcfcfc'],
    '1' : ['white', 'black'],
    '2' : 'paint',
    '3' : ['green', 'green'],
    '4' : ['#FFD7F8', '#DCE5FF'],
}

let colors = [
    'red',
    'yellow',
    'blue',
    'green',
    'purple',
    'orange',
    'pink',
]

var dataStr = JSON.stringify(data);
var myProjects = JSON.parse(dataStr);

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fontColor: '#fcfcfc',
            bgColor: '#bababa',
            nameColor: '#fcfcfc',
            canvas: false,
        }
    }

    setColor = (bg, font) => {
        this.setState({
            fontColor: font,
            bgColor: bg,
            nameColor: font,
        });
    }

    hoverFunc = () => {
        let newColor = colors[Math.floor(Math.random() * colors.length)];
        while(newColor === this.state.nameColor)
            newColor = colors[Math.floor(Math.random() * colors.length)];
        this.setState({
            nameColor: newColor,
        })
    }

    showCanvas = () => {
        this.setState({
            canvas: true,
        });
    }
    hideCanvas = () => {
        this.setState({
            canvas: false,
        });
    }


    render() {
        return (
            <div id="appDiv" style={{background: this.state.bgColor, color: this.state.fontColor}}>
                
                <StyleOptions id="options" setColor={this.setColor}
                                showCanvas={this.showCanvas}
                                hideCanvas={this.hideCanvas}
                                themes={themes}></StyleOptions>
                {this.state.canvas ?
                    <PaintCanvas />
                    : null
                }
                <Regular
                        fontColor={this.state.fontColor}
                        bgColor={this.state.bgColor}
                        nameColor={this.state.nameColor}
                        setColor={this.setColor}
                        hoverFunc={this.hoverFunc}
                        data={data}></Regular>
                
            </div>
        );
    }
}

export default App;
