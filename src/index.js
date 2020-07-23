/*
 * Always use first Capital letter for the component name
*/

import React from 'react'
import ReactDOM from 'react-dom' 

// Create component by function 

// let User = function(props){
// 	return <h1>Hello {props.name}</h1>
// };

// Create component by class

class User extends React.Component{
	render(){
		return <h1>Hello {this.props.name} your team is {this.props.team}</h1>
	}
}

function Show(){
	return <div>	
				<User name = "Ahmad Raza" team = "Bayut"/>
				<User name = "Hamza" team = "CRM"/>
			</div>
}

ReactDOM.render(
	<Show/>,
	document.getElementById('root')
);
