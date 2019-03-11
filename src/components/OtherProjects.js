import React, { Component } from 'react';
import '../App.css';
import ProjectItem from './ProjectItem.js';





export default class OtherProjects extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {


	    return (
			<div id="projects_container" style={{background: this.props.bgColor}}>
				<h4 className="header">other work</h4>
				<ul>
					<li></li>
					<li></li>
					<li></li>
					<li></li>
				</ul>
				{dataList}
			</div>
			
	);
	}
}