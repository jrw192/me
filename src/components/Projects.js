import React, { Component } from 'react';
import './Regular.css';
import ProjectItem from './ProjectItem.js';





export default class Projects extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {

		const dataList = this.props.items.projects.map((project) => (
			<div><ProjectItem key={project.id} 
							projectTitle={project.title}
							projectInfo={project.info} 
							projectLink={project.url}
							projectImg={project.image}
							projectWriteup={project.writeup}
							></ProjectItem></div>
			)
		);

	    return (
			<div id="projects_container" style={{background: this.props.bgColor}}>
				<h4 className="header">just some stuff</h4>
				{dataList}
			</div>
			
	);
	}
}