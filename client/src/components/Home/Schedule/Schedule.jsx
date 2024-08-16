import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Schedule.css'
import scheduleImg from '../../../assets/home-1-background-patern-2.jpg'

const Schedule = () => {
  const navigate = useNavigate();

  const handleRequestClick = () => {
    navigate('/request');
  };
  return (
    <div>
      <div className="scheduleimg">
        <img src={scheduleImg} alt="" />
        <div className="scheduletext">
           <div>
           <h1>Schedule a visit</h1>
           <p>Request a visit today, and we'll bring our team to your property to provide expert guidance and personalized support.</p>
           
           </div>
          <div  className="request">
            <button onClick={handleRequestClick} >Request</button>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Schedule
