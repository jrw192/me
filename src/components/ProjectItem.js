import React, { Component } from 'react';
import './Regular.css';
import img from "../static/data/lunchbox.png";


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
				
				<a className="item" href={this.props.projectLink}
									><input type="checkbox"
											onClick={() => this.checked(this)}/>
									{this.props.projectTitle}</a>
				<p className="tab">({this.props.projectInfo});</p>
				{this.state.checked ? (<img src={require(`../static/data/${this.props.projectImg}`)} alt={this.props.projectTitle} className="project_image"/>) : null}  
			</div>
		);
		/*return (
			<div className="project_item">
				
				<p className="item"><input type="checkbox"/>
									{this.props.projectTitle}</p>
				<p className="tab">({this.props.projectInfo});</p>
			</div>
		)*/
	}
}