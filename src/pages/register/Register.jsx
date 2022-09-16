import React from 'react'
import Sidebar from '../../sidebar/Sidebar'
import './register.css'

export default function Register() {
  return (
    <div className="register">
        <div className="registerWrapper">
            <form className="registerForm">
                <label>Userame</label>
                <input type="text" placeholder='enter your name'></input>
                <label>Email</label>
                <input type="email" placeholder='enter your email'></input>
                <label>Password</label>
                <input type="password" placeholder='password'></input>
                <label>Confirm your password</label>
                <input type="password" placeholder='password'></input>
                <button className='registerButton'>Register</button>
            </form>
        </div>
        <Sidebar></Sidebar>
    </div>
  )
}
