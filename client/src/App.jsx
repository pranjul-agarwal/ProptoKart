import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'



export default function A() {
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
   <Route path="/profile" element={<Profile />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
  </Routes>
  </BrowserRouter>
  
}
