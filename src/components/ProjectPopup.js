import React, { Component } from 'react';
import '../App.css';
import {PopupAscii} from './AsciiSquare' 

let colors = [
    'red',
    'yellow',
    'blue',
    'green',
    'purple',
    'orange',
    'pink',
]
var prevColor = ''
export default class ProjectPopup extends React.Component {

	render() {
		let newColor = colors[Math.floor(Math.random() * colors.length)];
		while(prevColor === newColor)
			newColor = colors[Math.floor(Math.random() * colors.length)];
		// let x_val = this.props.mouseX + Math.random() * 1000;
		// let y_val = this.props.mouseY - Math.random() * 1000;
		let x_val = window.innerWidth / 5 * 3;
		let y_val = window.innerHeight / 5;
		return (
				<div className="popup" style={{top: y_val, left: x_val, background: newColor}}>
					<PopupAscii/>
					<div className="popup_inner">
							<img src={require(`../static/data/${this.props.projectImg}`)} 
								alt={this.props.projectTitle} 
								className="project_image"/>
							<p className="project_writeup"
							>{this.props.projectWriteup}</p>
					</div>
				</div>
			)
	}
}