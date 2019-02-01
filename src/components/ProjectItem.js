import React, { Component } from 'react';
import './Regular.css';
import img from "../static/data/lunchbox.png";
import ProjectInfo from './ProjectInfo.js'


export default class ProjectItem extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            checked: false
        };
    }
    checked = (e) => {
        this.setState({checked: !this.state.checked});
    }

	render() {
	    return (
			<div className="project_item">
				
				<p className="header"><input type="checkbox"
											onClick={() => this.checked(this)}/>
									{this.props.projectTitle}</p>
				<p className="tab">> {this.props.projectInfo};</p>
				{this.state.checked ? 
					<ProjectInfo projectImg={this.props.projectImg} 
									projectWriteup={this.props.projectWriteup} 
									projectTitle={this.props.projectTitle}
									projectLink={this.props.projectLink}> </ProjectInfo>
				: null}  
			</div>
		);
	}
}