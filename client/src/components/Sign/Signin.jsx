import React from 'react'
import '../Sign/signup.css'
import img from '../../assets/signup.jpg'
import { Link } from 'react-router-dom'
export default function Signin() {
  return (
    <div className="parent-container">
     <> 
  <div className='section'>
        <h1>Sign In</h1>
        <form className='signform'>
            <input type="email" placeholder='Email' />
            <input type="password" placeholder='Password' />
            <button type='submit' >Sign In</button>
        </form>
        <div className='flex gap-2 mt-2'>
            <p> Don't Have an account?</p>
            <Link to={"/sign-up"}>
            <span className='text-red-600'>Sign up</span>
            </Link>
        </div>
   </div>
    </>
    </div>
  )
}
