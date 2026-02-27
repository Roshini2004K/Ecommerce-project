import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Login = () => {
 
 let navigate= useNavigate()

  let handleNavigate=() =>{
    navigate("/")

  }



  let {newuser}=useParams()
  
  return (
    <div>Login - {newuser}
    <button onClick ={handleNavigate}> Move to Home</button></div>
  )
}

export default Login