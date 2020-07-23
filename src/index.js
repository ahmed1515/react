import React from 'react'
import ReactDOM from 'react-dom'

let clock = function (){
	return <h1> Time now:- {new Date().toLocaleTimeString()} </h1>
}
setInterval(function(){
	ReactDOM.render(
		clock(),
		document.getElementById('root')
	);
},1000);