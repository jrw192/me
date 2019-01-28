import React, { Component } from 'react';
import './Regular.css';




export default class StyleOptions extends React.Component {

	getColors = () => {
		let e = document.getElementById("options");
		let value = e.options[e.selectedIndex].value;
		this.props.setColor(this.props.themes[value][0], this.props.themes[value][1]);

	}

	render() {
	    return (
	    	<div>
	    		<select id="options">
		    		<option className="button" value='0'>Professional Mode</option>
		    		<option className="button"  value='1'>Frog Mode</option>
		    		<option className="button" value='2'>Pantone 2017 Mode</option>
		    	</select>
		    	<button onClick={() => this.getColors()}>Go</button>
	    	</div>
	    )
}
}