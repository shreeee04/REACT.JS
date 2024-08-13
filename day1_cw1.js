import React from "react";
function alertMsg(){
    alert("Message from Javascript Alert!");
    console.log("Message from Developer!");
}
const DAY1CW = () =>{
    return (
        <div>
        <h1>Let we see the output of Javascript</h1>
        <button onClick={alertMsg}>OK</button>
        </div>
    );
};
export default DAY1CW;