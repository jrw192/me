import React, { Component } from 'react';
import './Regular.css'


export default class ProjectItem extends React.Component {
	render() {
	    /*return (
			<div className="project_item">
				
				<a className="item" href={this.props.projectLink}><input type="checkbox"/>
									{this.props.projectTitle}</a>
				<p className="tab">({this.props.projectInfo});</p>
			</div>
		);*/
		return (
			<div className="project_item">
				
				<p className="item"><input type="checkbox"/>
									{this.props.projectTitle}</p>
				<p className="tab">({this.props.projectInfo});</p>
			</div>
		)
	}
}