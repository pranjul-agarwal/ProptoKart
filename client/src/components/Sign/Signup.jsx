import React from 'react'
import '../Sign/signup.css'
import img from '../../assets/signup.jpg'
import { Link } from 'react-router-dom'
export default function Signup() {
  return (
    <div className="parent-container">
     <> 
  <div className='section'>
        <h1>Sign Up</h1>
        <form className='signform'>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit' >Sign Up</button>
        </form>
        <div className='flex gap-2 mt-2'>
            <p>Have an account?</p>
            <Link to={"/sign-in"}>
            <span className='text-red-600'>Sign in</span>
            </Link>
        </div>
   </div>
    </>
    </div>
  )
}
