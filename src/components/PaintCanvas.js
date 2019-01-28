import React, { Component } from 'react';
import styled from 'styled-components';
import EraserIcon from '../static/eraser_icon.png'
import './Canvas.css'
import './Regular.css'


/***

adapted from jodie's react paint app

***/

const Div = styled.div`
	height: 20px;
	width: 20px;
	
	border: 1px solid black;
	margin-right: 1px;
 }
`;

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.onMouseDown = this.onMouseDown.bind(this);
		this.onMouseMove = this.onMouseMove.bind(this);
		this.endPaintEvent = this.endPaintEvent.bind(this);
		this.onColorClick = this.onColorClick.bind(this);
		this.handleChange = this.handleChange.bind(this)
		this.state = {
			myStrokeStyle: 'red',
			lineWidth: 5,
			userName: '',
			width: 0,
			height: 0,
		}
	};

	

	isPainting = false;
	//myStrokeStyle = 'white';
	line = [];
	prevPos = { offsetX: 0, offsetY: 0 };

	onMouseDown({ nativeEvent }) {
		this.prevPos = nativeEvent;
		this.isPainting = true;
		
		const offSetData = nativeEvent;
		this.paint(this.prevPos, offSetData, this.state.myStrokeStyle)

	}
	onMouseMove({ nativeEvent }) {
		if (this.isPainting) {
			const offSetData = nativeEvent;
			// Set the start and stop position of the paint event.
			const positionData = {
				start: { ...this.prevPos },
				stop: { ...offSetData },
			};
			// Add the position to the line array
			this.line = this.line.concat(positionData);
			this.paint(this.prevPos, offSetData, this.state.myStrokeStyle);
		}
	}
	endPaintEvent() {
		if (this.isPainting) {
			this.isPainting = false;
		}
	}
	paint(prevPos, currPos, strokeStyle) {
		const { offsetX, offsetY } = currPos;
		const { offsetX: x, offsetY: y } = prevPos;

		this.ctx.beginPath();
		this.ctx.strokeStyle = strokeStyle;
		// Move the the prevPosition of the mouse
		this.ctx.moveTo(x, y);
		// Draw a line to the current position of the mouse
		this.ctx.lineTo(offsetX, offsetY);
		// Visualize the line using the strokeStyle
		this.ctx.stroke();
		this.prevPos = { offsetX, offsetY };
	}
	onColorClick(e) {
	    //this.myStrokeStyle = window.getComputedStyle(e.target, null).getPropertyValue("background-color");
	    this.setState({
			myStrokeStyle: window.getComputedStyle(e.target, null).getPropertyValue("background-color"),
			lineWidth: 5,
		})
		this.ctx.lineWidth = 5;
	}
	handleChange(event) {
	    this.setState({userName: event.target.value});
	  }


	componentDidMount() {
		//get viewport dimensions
		this.setState({ width: window.innerWidth, height: window.innerHeight });
		// Here we set up the properties of the canvas element. 
		this.canvas.width = 1500;
		this.canvas.height = 1000;
		this.ctx = this.canvas.getContext('2d');
		this.ctx.fillStyle = 'black';
		//this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

		this.ctx.lineJoin = 'round';
		this.ctx.lineCap = 'round';
		this.ctx.lineWidth = 5;
	}



	/*************S3 UPLOAD STUFF***************/

	/*******************************************/

	render() {
		const stylesObj = {
			backgroundColor: this.state.myStrokeStyle,
			borderRadius: '50%',
		};

		return (
			<div className="canvas">
				<div className="palette">
					<Div style={stylesObj}></Div>
					<Div style={{backgroundColor: 'red'}} onClick={this.onColorClick}></Div>
					<Div style={{backgroundColor: 'green'}} onClick={this.onColorClick}></Div>
					<Div style={{backgroundColor: 'yellow'}} onClick={this.onColorClick}></Div>
					<Div style={{backgroundColor: 'blue'}} onClick={this.onColorClick}></Div>
					<Div style={{backgroundColor: 'pink'}} onClick={this.onColorClick}></Div>
				</div>
				<div>
					<canvas className="canvas"
						ref={(ref) => (this.canvas = ref)}
						style={{position: 'absolute', display: 'inline-block'}}
						onMouseDown={this.onMouseDown}
						onMouseLeave={this.endPaintEvent}
						onMouseUp={this.endPaintEvent}
						onMouseMove={this.onMouseMove}
					/>
				</div>
			</div>
		);
	}
}