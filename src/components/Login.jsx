import React from 'react'
import { useNavigate, useParams } from 'react-router-dom';

const Login = () => {
 
 let navigate= useNavigate()

  let handleNavigate=() =>{
    navigate("/")

  }
   let style={
    background:"#4096ed",
    borderRadius:'5px',
    cursor:"pointer",
    fontSize:"16px",
    alignItems:"center",
    padding:"10px 10px"

    
   
   }



  let {newuser}=useParams()
  
  return (
    <div>Login - {newuser}
    <span>
          <button onClick ={handleNavigate} style={style}> Move to Home</button>

    </span>
    </div>
  )
}

export default Login