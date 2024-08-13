import React from "react";
function Compare()
{
    const name1="Kabil";
    const name2="Kabil";
    const object1={name:"Kabil"};
   const object2={name:"Kabil"};
   alert(object1===object2);
   alert(name1===name2);
   alert(object1===name1);
}
const DAY1CY = ()=>{
    return (
        <div>
            <h1>Let we see the output of javascript</h1>
            <button onClick={Compare}>OK</button>
        </div>
    );
};
export default DAY1CY;