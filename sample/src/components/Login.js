import React from 'react';
import './Login.css';
import { Uservalidation } from './Validation';
function Login() {
  const Createuser=async (event)=>{
    event.preventDefault()
    FormData={
    name: event.target[0].value,
    email:event.target[1].value,
    password:event.target[2].value
    }
    console.log(FormData)
    const isValit=await Uservalidation.isValit(FormData)
    console.log(isValit)
  }
  return (
    <div>
    
    <div className='container'>
    <form className='form' onSubmit={Createuser}> 
        <label for="name" >Name : </label>
        <input type='text' placeholder='enter your name'required></input>
        <label for="name" >E mail : </label>
        <input type='email' placeholder='enter your e mail'required></input>
        <label for="name" >Password : </label>
        <input type='password' placeholder='password' required></input>
        <div className='button'>
        <button className="btn btn-primary" type="submit">Login</button>
        <button className="btn btn-primary" type="submit">Signin</button>
        <button className="btn btn-primary" type="reset">Clear</button>
        </div>
        </form>
        </div>
        </div>
  )
}

export default Login;