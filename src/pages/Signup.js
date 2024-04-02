import React, { useState } from 'react'

const Signup = (props) => {

 const [infosuser, setInfosuser] = useState({
    username : "",
    password : ""
 })


 
  return (
    <div>
        <input type="text" placeholder='username' value={infosuser.username} onChange={(e)=> setInfosuser({...infosuser, username : e.target.value }) }/>

        <input type="text" placeholder='password' value={infosuser.password} onChange={(e)=> setInfosuser({...infosuser, password : e.target.value }) } />

        <button  onClick={()=> props.add(infosuser)}>Signup</button>
    </div>
  )
}

export default Signup