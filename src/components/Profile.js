import React, { Component } from 'react';
import Resume from '../static/data/resume.png'
import '../App.css';


export default class Profile extends Component {

	alert = (e) => {
		alert("jodiewei2019 [at] u [dot] northwestern [dot] edu");
		e.preventDefault();
		return false;
	}

	render() {
		return (
			<div id="profile">
				<select className="header">
					<option className="item">future:</option>
					<option className="item">software engineer @ google [fall 2019]</option>
				</select>
				<br/><br/>
				<select className="header">
					<option className="item">present:</option>
					<option className="item">computer science + design @ northwestern university [2015-2019]</option>
				</select>
				<br/><br/>
				<select className="header">
					<option className="item">past:</option>
					<option className="item">software development intern @ ibm [summer 2018]</option>
					<option className="item">software development intern @ deep dish tech [summer 2017]</option>
				</select>
				<br/><br/>
				<p className="header">
					<a href="https://www.linkedin.com/in/jodie-wei-762522a1/"target="_blank">linkedin</a>&nbsp;
					<a href="" onClick={this.alert}>email</a>&nbsp;
					<a href={Resume} target="_blank">resume</a></p>
			</div>
		);
	}
}

