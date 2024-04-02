import logo from './logo.svg';
import './App.css';
import Signup from './pages/Signup';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import Signin from './pages/Signin';
import Home from './pages/Home';
import AuthProvider from './context';
import Protected from './Routes/Protected';
import Profile from './pages/profile';

function App() {

const [users, setUsers] = useState([
  {
    username : "imane",
    password : "imane"

  }
])

const AddUser = (user) =>{

setUsers([...users, user])

}


console.log(users)


  return (
    <div className="App">
      <AuthProvider>
     <Routes>

      <Route path="/" element = {<Signin list = {users}/>}/>
      <Route path = "/signup" element = {<Signup add = {AddUser}/>}/>
      <Route element= {<Protected/>}>
      <Route path = "/home" element = {<Home/>}/>
      <Route path="/profile" element={<Profile/>}/>

      </Route>

     </Routes>
     </AuthProvider>

      


    </div>
  );
}

export default App;
