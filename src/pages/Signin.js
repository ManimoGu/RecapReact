import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext} from 'react'
import { authentication } from '../context'


const Signin = (props) => {

    const access = useContext(authentication)


    

    const navigate = useNavigate()

    const [infosuser, setInfosuser] = useState({
        username : "",
        password : ""
     })

     const Authuser = ()=>{

       let result = props.list.find(item => item.username === infosuser.username && item.password === infosuser.password)
  
       if(result){
        access.logged()
        navigate("/home")

       }else{ console.log("incorrect credentials")}
     }
    

  return (
    <div>
        <input type="text" placeholder='username' value={infosuser.username} onChange={(e)=> setInfosuser({...infosuser, username : e.target.value }) }/>
        <input type="text" placeholder='password'  value={infosuser.password} onChange={(e)=> setInfosuser({...infosuser, password : e.target.value }) }/>
        <button onClick={()=> Authuser()}>Signin</button>
         <Link to="/signup"><p>Signup</p></Link>
    </div>
  )
}

export default Signin