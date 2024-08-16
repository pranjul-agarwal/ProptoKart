import React from 'react'
import '../Sign/signup.css'

import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'
import OAuth from '../OAuth';

export default function Signup() {
  const [formData,setFormData]=useState({});
  const [error,setError]=useState(null);
  const [loading,setLoading]=useState(false);
  const navigate=useNavigate();
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
        });
  };
  
  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      setLoading(true);
    const res= await fetch('/api/auth/signup',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    });
   const data=await res.json();
   if(data.success==false){
      setLoading(false);
      setError(data.message);
      return;
   }
   setLoading(false);
   setError(null);
   navigate('/sign-in');
    }
    catch(error){
      setLoading(false);
      setError(error.message);
  }
};
  return (
    <div className="parent-container">
     <> 
  <div className='section'>
        <h1>Sign Up</h1>
        <form className='signform' onSubmit={handleSubmit}>
            <input type="text" placeholder='Username' id='username' onChange={handleChange} />
            <input type="email" placeholder='Email' id='email' onChange={handleChange} />
            <input type="password" placeholder='Password' id='password' onChange={handleChange} />
            <button className='signbutton' disabled={loading} type='submit' >
              {loading ? 'Loading...':'Sign Up'}
            </button>
            <OAuth/>
        </form>
        <div className='flex gap-2 mt-2'>
            <p>Have an account?</p>
            <Link to={"/sign-in"}>
            <span className='text-red-600'>Sign in</span>
            </Link>
        </div>
        {error && <p className='text-red-600'>{error}</p>}
   </div>
    </>
    </div>
  )
}
