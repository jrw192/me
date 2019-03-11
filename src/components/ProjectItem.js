import React, { Component } from 'react';
import '../App.css';
import img from "../static/data/lunchbox.png";
import ProjectInfo from './ProjectInfo.js'
import ProjectPopup from './ProjectPopup.js'


export default class ProjectItem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            checked: false,
            hovered: false,
            x: 0,
            y: 0,
        };
    }
    checked = (e) => {
        this.setState({checked: !this.state.checked});
    }

    hovering = (e) => {
    	console.log("window coords: ", window.innerWidth, window.innerHeight)
    	this.setState({
    		x: e.screenX,
    		y: e.screenY,
    		hovered: true
    	})
    }
    leaving = (e) => {
    	this.setState({hovered: false})
    }

	render() {
		if(this.props.projectLink !== "") {
			return (
				<div className="project_item">
					
					<a href={this.props.projectLink} target="_blank" className="header" onMouseOver={this.hovering}
										onMouseLeave={this.leaving}>
										> {this.props.projectTitle}</a>
					<p className="tab">{this.props.projectInfo};</p>
					{this.state.hovered ? 
						<ProjectPopup projectImg={this.props.projectImg} 
										projectWriteup={this.props.projectWriteup} 
										projectTitle={this.props.projectTitle}
										projectLink={this.props.projectLink}
										mouseX={this.state.x}
										mouseY={this.state.y}> </ProjectPopup>
					: null}  
				</div>
			);
		}
		else {
		    return (
				<div className="project_item">
					
					<p className="header" onMouseOver={this.hovering}
										onMouseLeave={this.leaving}>
										> {this.props.projectTitle}</p>
					<p className="tab">{this.props.projectInfo};</p>
					{this.state.hovered ? 
						<ProjectPopup projectImg={this.props.projectImg} 
										projectWriteup={this.props.projectWriteup} 
										projectTitle={this.props.projectTitle}
										projectLink={this.props.projectLink}
										mouseX={this.state.x}
										mouseY={this.state.y}> </ProjectPopup>
					: null}  
				</div>
			);
		}
	}
}