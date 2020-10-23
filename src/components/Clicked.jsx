import React,{Component} from "react";

class Clicked extends Component{
  constructor(props) {
		super(props);
		this.state={
         message:""
		}
	  };

	greetUser(){
    this.setState({
message:"Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy"
	})
}
render(){
  return(
     <div>
     <p id="para">{this.state.message}</p>
     <button id="click" onClick={this.greetUser()}>click</button>
     </div>
  );
}
}
export default Clicked