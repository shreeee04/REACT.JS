import React ,{useState} from 'react';
const Add=()=>
{
    const [users, setUsers] =useState([  {
          id:1,
        name: "SHREE" 
      },
      {
        id:2,
        name:"NITHY"
      }

    ]);
    
    const[name,setName] =useState("");
    const addUser=()=>
    {
        const newUs= {
            id:users.length+1,
            name: name
        };
        setUsers([...users,newUs]);
        setName("");
    }
    return(
        <div>
            <p>Enter name:</p>   
             <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <button onClick={addUser}>Add On</button> 
            <ul>
            {users.map((users) => (
                <div key={users.id}>
                    <p>Id : {users.id}</p>
                    <p>Name :{users.name}</p>
                    
                    </div>
            ))}
            </ul>
        </div>
    )
}
export default Add;