import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
		super(props);
		super(props);
		this.greetUser = this.greetUser.bind(this);
	  
	};

	greetUser(){
return <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>
}
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
                <button id="click" onClick={this.greetUser}>click</button>
    		</div>
    	);
    }
}


export default App;

