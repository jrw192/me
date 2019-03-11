import React, { Component } from 'react';
import '../App.css';

// <option className="button"  value='1'>Frog Mode</option>
// <option className="button" value='2'>Pantone 2017 Mode</option>


export default class StyleOptions extends React.Component {

	getColors = () => {
		let e = document.getElementById("options");
		let value = e.options[e.selectedIndex].value;
		
		if(value === '2') {
			this.props.showCanvas();
			this.props.setColor('white', 'black');
		}
		else {
			this.props.setColor(this.props.themes[value][0], this.props.themes[value][1]);
			this.props.hideCanvas();
		}
	}


	render() {
	    return (
	    	<div>
	    		<select id="options">
		    		<option className="button" value='1'>Default</option>
		    		<option className="button" value='2'>Kids' Zone</option>
		    	</select>
		    	<button id="option_select" onClick={() => this.getColors()}>go</button>
	    	</div>
	    )
}
}