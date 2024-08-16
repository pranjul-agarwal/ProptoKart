import React from 'react'
import '../Sign/signup.css'
import OAuth from '../OAuth.jsx'

import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signInStart,signInFailure,signInSuccess } from '../../redux/user/userSlice'

export default function SignIn() {
  const [formData,setFormData]=useState({});
  const {loading,error}=useSelector((state)=>state.user);
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
        });
  };
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      dispatch(signInStart());
    const res= await fetch('/api/auth/signin',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
   const data=await res.json();
   if(data.success==false){
      dispatch(signInFailure(data.message));
      return;
   }
    dispatch(signInSuccess(data));
   
   navigate('/');
    }
    catch(error){
    dispatch(signInFailure(error.message));
  }
};
  return (
    <div className="parent-container">
     <> 
  <div className='section'>
        <h1>Sign In</h1>
        <form className='signform' onSubmit={handleSubmit}>
          
            <input type="email" placeholder='Email' id='email' onChange={handleChange} />
            <input type="password" placeholder='Password' id='password' onChange={handleChange} />
            <button className='signbutton' disabled={loading} type='submit' >
              {loading ? 'Loading...':'Sign In'}
            </button>
            <OAuth/>
        </form>
        <div className='flex gap-2 mt-2'>
            <p>Don't have an account?</p>
            <Link to={"/sign-up"}>
            <span className='text-red-600'>Sign up</span>
            </Link>
        </div>
        {error && <p className='text-red-600'>{error}</p>}
   </div>
    </>
    </div>
  )
}
