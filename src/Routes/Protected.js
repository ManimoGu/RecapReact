import React from 'react'
import { useContext } from 'react'
import { authentication } from '../context'
import {Outlet, Navigate} from "react-router-dom"

const Protected = () => {

    const access = useContext(authentication)

  return  access.auth ? <Outlet/> : <Navigate to="/"/>
}

export default Protected