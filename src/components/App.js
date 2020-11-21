import React, {Component, useState} from "react";
import '../styles/App.css';

class App extends Component {
constructor(){
  super()
this.state={msg:""}
}

Clicked(){
this.setState({
msg:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
})
}
    
    render() {
    	return(
    		<div id="main">
				<p id="para">{this.state.msg}</p>
			<button id="click" onClick={this.Clicked()}>click here</button>
    		</div>
    	);
    }
}


export default App;

