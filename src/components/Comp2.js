import React, { useEffect, useState } from 'react'

export const Comp2 = () => {
const [users, setUsers] = useState(null);
const [user, setUser]= useState(
    {
        name:"Ajay",
        job:"manager"
    }
);
useEffect(()=>
{
    fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((response) => console.log(response.data));
   
},[]);

const GetUsersList =()=>
{
    fetch("https://reqres.in/api/users?page=2")
    .then((res) => res.json())
    .then((response) => 
        {
            console.log(response.data)
            setUsers(response.data)
            console.log({users})
});
}

 const AddUser = ()=>
 {
  fetch("https://reqres.in/api/users",
    {
    method:'POST',
     headers:
     {
        'Accept':'Appication/json',
        'Content-Type':'Applicaton/json'
     },
     body: JSON.stringify(user)
 })
 .then((res)=> res.json())
 .then((response) =>  console.log(response))
 }
  return (
    <div>Comp2
      {users && console.log(users.length)}
      {users && <h1> {users.length} </h1>}
      {users ? users.map((user)=>
      <li> {user.id} - {user.email} - {user.first_name} </li>)
       : <h1> There are no records</h1> }
        <button onClick={GetUsersList}> Get Users List </button>
   <button onClick={AddUser}> Add User </button>
    </div>
  )
}
