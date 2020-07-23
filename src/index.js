/*
 * State handling 
 * Reuseablility and abstraction
*/

import React from 'react'
import ReactDOM from 'react-dom' 

/* Get current time */


class Clock extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			date : new Date
		}
	}


	componentDidMount(){
		/* Update clock time after 1 second */
		this.timer = setInterval( () => this.start(),1000);
	}

	componentWillUnmount(){
		clearInterval(this.timer);
	}

	start(){
		this.setState({
			date : new Date()
		});
	}
	
	render(){
		return <h1>Time now:- {this.state.date.toLocaleTimeString()}</h1>
	}
}



/* Show Time */
ReactDOM.render(
	<Clock/>,
	document.getElementById('root')
);


