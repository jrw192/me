import React, { Component } from 'react';
import './Regular.css'



export default class Regular extends React.Component {
	state = {
        fontColor: 'black',
        bgColor: 'white',
        frogged: 'false',
    }

    SetColor = (bg, font) => {
        this.setState({
            fontColor: font,
            bgColor: bg,
        });
        console.log("font: " + this.state.fontColor + " bg: " + this.state.bgColor);
    }

	render() {
	    return (
	    	<div className="mainDiv" style={{background: this.state.bgColor, color: this.state.fontColor}}>
	    		<div id="buttons">
		    		<button className="button" onClick={() => this.SetColor('white', 'black')}>Professional Mode</button>
		    		<button className="button" onClick={() => this.SetColor('green', 'green')}>Frog Mode</button>
		    	</div>
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
						<p className="item">computer science + segal design certificate @ northwestern university [2015-2019];<br/></p>
						<p className="header">past:</p>
						<p className="item">software development intern @ ibm [summer 2018];</p>
						<p className="item">software development intern @ deep dish tech [summer 2017];</p>
				</div>

				<div id="projects">
					<div id="projects_content">
						<p className="header">things i've done<br/></p>
						
						<p className="item">jspaint: an online painting app<br></br></p>
						<p className="tab">(takeaways: javascript, react.js, heroku, aws);<br></br></p>

						<p className="item">news article analyzer: sentiment analysis using ibm watson<br></br></p>
						<p className="tab">(takeaways: watson api, natural language understanding, developing an app in 24 hours!!!;)<br></br></p>
						
						<p className="item">a study on college students: a data science project on college students <br></br></p>
						<p className="tab">(takeaways: python, tensorflow, tableau, spark, mapreduce, impala, vega, machine learning models, data visualization);<br></br></p>

						<p className="item">palm: a redesigned container lid for patients with hand disabilities<br></br></p>
						<p className="tab">(takeaways: design thinking, prototyping, user testing, keeping fingers safe while sawing apart plastic and metal);<br></br></p>
						
						<p className="item">mealhop: a food ordering coordinater for your chat group<br></br></p>
						<p className="tab">(takeaways: javascript, using an api [cisco spark], developing an mvp in 36 hours);<br></br></p>

						<p className="item">spotify analytics: a web app to view your spotify listening data<br></br></p>
						<p className="tab">(takeaways: javascript, using an api [spotify], express, node.js, pug);<br></br></p>
						
						<p classNme="item">backend and database for brew bike coffee's mobile app <br></br></p>
						<p className="tab">(takeaways: mongodb, node.js, working with clients);<br></br></p>
						
						<p className="item">user-friendly interface for emotionalytics, a mood-tracking app<br></br></p>
						<p className="tab">(takeaways: wireframing, user testing, front-end dev);<br></br></p>
					</div>
				</div>
			</div>
		);
		}
	}