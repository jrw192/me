import React, { Component } from 'react';
import './Regular.css';


export default class ProjectInfo extends React.Component {
	render() {
	    /*return (
	    	<table className="project_info" style={{background: this.props.bgColor, color: this.props.fontColor}}>
	    		<tr>
					<td><img src={require(`../static/data/${this.props.projectImg}`)} 
							alt={this.props.projectTitle} 
							className="project_image"/></td>
					<td><p className="project_writeup">{this.props.projectWriteup}</p></td>
				</tr>
			</table>
		);*/
		return (
			<div className="project_info" style={{background: this.props.bgColor, color: this.props.fontColor}}>
				<img style={{display:'inline-block'}} src={require(`../static/data/${this.props.projectImg}`)} 
					alt={this.props.projectTitle} 
					className="project_image"/>
				<p style={{display: 'inline-block', width: '50%', marginLeft: '0.5em', wordWrap: 'break-word'}} 
					className="project_writeup">{this.props.projectWriteup}</p>
			</div>
		)
	}
}