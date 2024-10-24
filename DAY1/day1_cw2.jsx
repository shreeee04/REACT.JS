import React from "react";
function alertMsg()
{
    let myObject={name:"Madras"};
    let newObject=myObject;
    myObject.name="Chennai";
    let myarray=["a","e","i","o"];
    let vowelArray=myarray;
    myarray.push("u");
    console.log(myObject);
    console.log(newObject);
    console.log(vowelArray);
    alert("Check the console output!");

}
const DAY1CW2=()=>{
    return(
        <div>
            <h1>Reference Data Types use same memory</h1>
            <button onClick={alertMsg}>OK</button>
        </div>
    );
};
export default DAY1CW2;
