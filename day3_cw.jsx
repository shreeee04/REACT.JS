import React from "react";
class ToggleMessage extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={
      button:"Show Component"
    }
  }
  Click=()=>
  {
    alert("Hi! How are You!!!");
    this.setState((pre)=>({button:pre.button==='Show Component'?'Hide Component' :'Show Component'}))
  }
  render()
  {
    return (
       <button onClick ={this.Click}>{this.state.button}</button>
    )
  }
}
export default ToggleMessage;
