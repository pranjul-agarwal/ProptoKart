import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import About from './pages/About'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Header from './components/Header'
import Listing from './pages/Listing'
import Footer from './components/Footer/Footer.jsx'
import Request from './pages/Request.jsx'
import './App.css'

export default function App() {
  return( 
  <div className="app-container">
  <Header />
   <div className="main-content">
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
   <Route path="/profile" element={<Profile />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/sign-in" element={<SignIn />} />
    <Route path="/sign-up" element={<SignUp />} />
    <Route path="/listing" element={<Listing />} />
    <Route path="/request" element={<Request/>}/>
  </Routes>
  </BrowserRouter>
  </div>
  <Footer/>
  </div>
  )
}
