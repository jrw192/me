import React, { Component } from 'react';
import '../App.css';
import ProjectItem from './ProjectItem.js';





export default class OtherProjects extends React.Component {
	constructor(props) {
		super(props);
	}


	render() {


	    return (
			<div >
				<h4 className="header">other work</h4>
				<div className="project_item">
				<p className="tab">> data science project analyzing university student body demographics and using statistical models to fit student profile to universities</p>
				<p className="tab">> relational database implemented in java</p>
				<p className="tab">> using machine learning models to label songs with specific moods given audio features</p>
				<p className="tab">> using machine learning models and the yelp api to predict establishment success based on attributes</p>
				<p className="tab">> dns proxies and http servers built using python and sockets</p>
				<p className="tab">> web application for crowd-sourced printing ("uber for printing") developed for a client</p>
				<p className="tab">> health status dashboard and database for monitoring ibm public cloud health, presenting jenkins tests of over 100 products over 20 different environments</p>
				</div>
			</div>
			
	);
	}
}