import React from 'react'
import ReactDOM from 'react-dom'


/* Using dynamic elements*/
var name = 'Umer'
var text = <div><h1 class="header-section">Welcome {name}</h1><h2> You will be enjoyed here </h2></div>

/* Using object */
let user = {
	firstname : 'M Ahmad',
	lastname : 'Raza'
}
// <h1> Welcome { user.firstname} {user.lastname} </h1>,

// Using functions
let cartoon = function(name,show) {
	return <h1> Cartoon name is {name} and its show time is {show} </h1>
}

ReactDOM.render(
	cartoon('doremon','9-11 AM'),
	document.getElementById('root')
);
