import React, {Component, useState} from "react";
import '../styles/App.css';
import Clicked from "./Clicked";
class App extends Component {
    
    render() {
    	return(
    		<div id="main">
				{ /* Do not remove this main div!! */ }
				<Clicked/>
    		</div>
    	);
    }
}


export default App;

