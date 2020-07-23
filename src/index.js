import React from 'react'
import ReactDOM from 'react-dom'

class Message extends React.Component{

	constructor(props){
		super(props);
	}

	render(){ 
		if(this.props.value){
			return <h1>This is first message</h1>		
		}
		else{
		 	return <h1>This is second message</h1>
		}
	}
}


class Btn extends React.Component{
	
	handleClick = () => {
		this.setState({
			value : !this.state.value
		});
	}
	
	constructor(props){
		super(props);
		this.state = {value:true};
	}
	
	render(){
		return (
				<div>
					<button onClick={this.handleClick}>Change the message</button>
					<Message value={this.state.value}/>
				</div>
			);	
	}
}

ReactDOM.render(
	<Btn/>,
	document.getElementById('root')
);