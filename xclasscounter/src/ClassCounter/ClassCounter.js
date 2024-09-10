
import React from "react";
class Counter extends React.Component{
    constructor(){
        super();
       this.state={count:0}
    }
        handleCount=(val)=>{
        this.setState((prevState)=>({count: prevState.count+val}))
        }
    
    render(){
        return(<div style={{textAlign:"left",marginLeft:"3rem"}}>
        <h1>Counter App</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={()=>this.handleCount(+1)}>Increment</button>
        <button onClick={()=>this.handleCount(-1)}>Decrement</button>
        </div>)
    }
}
export default Counter;