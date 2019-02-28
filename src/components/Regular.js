import React, { Component } from 'react';
import '../App.css';
import Projects from './Projects.js';
import StyleOptions from './StyleOptions';
import Resume from '../static/data/resume.png'
import Mario from '../static/data/mario.png'


const bg = {
	//backgroundImage: `url(${Mario})`
}

export default class Regular extends React.Component {
	alert = (e) => {
		alert("jodiewei2019 [at] u [dot] northwestern [dot] edu");
		e.preventDefault();
		return false;
	}
	
	render() {
	    return (
	    	<div className="mainDiv" style={{html: this.props.bgColor, background: this.props.bgColor, color: this.props.fontColor}}>
				<div id="title">
					<div id="title_content"
						style={bg}>
						<br/>
						<br id="item" />
						<h1 id="name" 
							style={{color: this.props.nameColor}} onMouseOver={this.props.hoverFunc}>jodie wei;</h1>
						<h3 id="tagline">> likes <a href="https://github.com/jrw192" target="_blank">code</a>,&nbsp;
											<a href="https://www.instagram.com/f.ishbrains/" target="_blank">art</a>,
											and&nbsp;
											<a href="https://www.google.com/search?tbm=isch&source=hp&biw=1440&bih=789&ei=fXhXXPurA5m9jgTU-YqICw&q=%E8%A5%BF%E7%BA%A2%E6%9F%BF%E7%82%92%E9%B8%A1%E8%9B%8B&oq=%E8%A5%BF%E7%BA%A2%E6%9F%BF%E7%82%92%E9%B8%A1%E8%9B%8B&gs_l=img.3..0j0i24l9.6525.14318..15812...19.0..1.70.1134.20......3....1..gws-wiz-img.....0..0i5i30j0i8i30j0i10i24.PYYmcd72dUY"
											target="_blank">tomato scrambled eggs</a><br/><br/><br/><br/><br/><br/></h3>
					</div>
				</div>

				<div id="profile">
						<p className="header">> future:</p>
						<p className="item">software engineer @ google [fall 2019];</p>
						<p className="header">> present:</p>
						<p className="item">computer science + design @ northwestern university [2015-2019];<br/></p>
						<p className="header">> past:</p>
						<p className="item">software development intern @ ibm [summer 2018];</p>
						<p className="item">software development intern @ deep dish tech [summer 2017];<br/><br/></p>
						<p className="header">
							<a href="https://www.linkedin.com/in/jodie-wei-762522a1/"target="_blank">linkedin</a>&nbsp;
							<a href="" onClick={this.alert}>email</a>&nbsp;
							<a href={Resume} target="_blank">resume</a></p>
				</div>

				<Projects items={this.props.data} bgColor={this.props.bgColor}></Projects>
			</div>
		);
		}
	}