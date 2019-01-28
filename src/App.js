import React, { Component } from 'react';
import Regular from './components/Regular.js';
import Projects from './components/Projects.js';
import StyleOptions from './components/StyleOptions.js';
import PaintCanvas from './components/PaintCanvas.js'
import './components/Regular.css';
import data from './static/data/myProjects.json';


let themes = {
    '0' : ['white', 'black'],
    '1' : ['green', 'green'],
    '2' : ['#FFD7F8', '#DCE5FF'],
    '3' : 'paint'
}

var dataStr = JSON.stringify(data);
var myProjects = JSON.parse(dataStr);

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            fontColor: 'black',
            bgColor: 'white',
            canvas: false,
        }
        this.setColor = this.setColor.bind(this);
        this.showCanvas = this.showCanvas.bind(this);
        this.hideCanvas = this.hideCanvas.bind(this);
    }

    setColor = (bg, font) => {
        this.setState({
            fontColor: font,
            bgColor: bg,
        });
    }

    showCanvas = () => {
        this.setState({
            canvas: true,
        });
        console.log(this.state.canvas);
    }
    hideCanvas = () => {
        this.setState({
            canvas: false,
        });
        console.log(this.state.canvas);
    }


    render() {
        console.log("projects: " , myProjects);
        return (
            <div id="appDiv">
                
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
                        setColor={this.setColor}
                        data={data}></Regular>
                
            </div>
        );
    }
}

export default App;
