import React, { Component } from 'react';
import '../App.css';


const bg = {
	//backgroundImage: `url(${Mario})`
}

class TitleAscii extends React.Component {
	render() {
	    return (
	    	<div className='ascii'>
	    	///////////////////////////////<br />
	    	///////////////////////////////<br />
	    	///////////////////////////////<br />
	    	///////////////////////////////<br />
	    	</div>
		);
	}
}

class ProfileAscii extends React.Component {
	render() {
	    return (
	    	<div className='ascii'>
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////////////////////////<br />
	    	</div>
		);
	}
}

class PopupAscii extends React.Component {
	render() {
	    return (
	    	<div className='ascii' style={{color: 'white', fontSize: '15px'}}>
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />
	    	///////////////////////////////////////////////////////<br />

	    	</div>
		);
	}
}

export {
	TitleAscii,
	ProfileAscii,
	PopupAscii,
}