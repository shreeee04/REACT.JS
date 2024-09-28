import React, {useEffect, useState} from 'react';
//import { useEffect } from 'react';
import Axios from 'axios';
const GetDemo=()=>
{
  const[user,setUsers]=useState([])
    useEffect(()=>
    {
        Axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>setUsers(response.data))
    })
  return (
    <>
    <h1>Welcome to Axios</h1>
    <form>
      <table border={3}>

 <thead>
       <tr>
        <th>
          Name
        </th>
        <th>Email</th>
        <th>Username</th>
       </tr>
       </thead>
       <tbody>

      
    {user.map((user)=>
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.email}</td>
      <td>{user.username}</td>
    </tr>)}
    </tbody>
  </table>
    </form>
    </>
  )
    
}
export default GetDemo;