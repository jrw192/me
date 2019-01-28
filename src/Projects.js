import React, { Component } from 'react';
import './Regular.css'


export default class Projects extends React.Component {
	render() {
	    return (
			<div id="projects_content">
				
				<input type="checkbox"/>
					
				<p className="header">things i've done</p>
				<br/>
				<p className="item">jspaint: an online painting app</p>
				<p className="tab">(takeaways: javascript, react.js, heroku, aws);</p>

				<p className="item">news article analyzer: sentiment analysis using ibm watson</p>
				<p className="tab">(takeaways: watson api, natural language understanding, developing an app in 24 hours!!!;)</p>
			
				<p className="item">a study on college students: a data science project on college students </p>
				<p className="tab">(takeaways: python, tensorflow, tableau, spark, mapreduce, impala, vega, machine learning models, data visualization);</p>

				<p className="item">palm: a redesigned container lid for patients with hand disabilities</p>
				<p className="tab">(takeaways: design thinking, prototyping, user testing, keeping fingers safe while sawing apart plastic and metal);</p>
			
				<p className="item">mealhop: a food ordering coordinater for your chat group</p>
				<p className="tab">(takeaways: javascript, using an api [cisco spark], developing an mvp in 36 hours);</p>

				<p className="item">spotify analytics: a web app to view your spotify listening data</p>
				<p className="tab">(takeaways: javascript, using an api [spotify], express, node.js, pug);</p>
			
				<p className="item">backend and database for brew bike coffee's mobile app </p>
				<p className="tab">(takeaways: mongodb, node.js, working with clients);</p>
			
				<p className="item">user-friendly interface for emotionalytics, a mood-tracking app</p>
				<p className="tab">(takeaways: wireframing, user testing, front-end dev);</p>
			</div>
	);
	}
}