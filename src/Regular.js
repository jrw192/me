import React, { Component } from 'react';
import './Regular.css';
import Projects from './Projects.js';
import StyleOptions from './StyleOptions';



export default class Regular extends React.Component {
	render() {
	    return (
	    	<div className="mainDiv" style={{background: this.props.bgColor, color: this.props.fontColor}}>
				<div id="title">
					<div id="title_content">
						<h1 id="name">jodie wei</h1>
						<h3 id="tagline">likes software, design, and making pointless apps<br/><br/><br/><br/><br/></h3>
					</div>
				</div>

				<div id="profile">
						<p className="header">future:</p>
						<p className="item"> engineer @ google [fall 2019];</p>
						<p className="header">present:</p>
						<p className="item">computer science + design @ northwestern university [2015-2019];<br/></p>
						<p className="header">past:</p>
						<p className="item">software development intern @ ibm [summer 2018];</p>
						<p className="item">software development intern @ deep dish tech [summer 2017];</p>
				</div>

				<div id="projects">
					<Projects></Projects>
				</div>
			</div>
		);
		}
	}