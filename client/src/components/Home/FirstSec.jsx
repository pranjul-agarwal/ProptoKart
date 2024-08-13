import React from 'react';
import './FirstSec.css';
import bg1 from '../../assets/home-1-rev-background-1.jpg';
import img1 from '../../assets/home-1-rev-img-1.png';
import bg2 from '../../assets/home-1-rev-background-2.jpg';
import img2 from '../../assets/home-1-rev-img-2.png';
import bg3 from '../../assets/home-1-rev-background-3.jpg';
import img3 from '../../assets/home-1-rev-img-3.png';
import logo from '../../assets/logo.png';

const FirstSec = () => {
  return (
    <div className="slides">
      <div className="slide">
        <img src={bg1} alt="Background 1" className="bg-img" />
        <img src={img1} alt="Image 1" className="right-img" />
      </div>
      <div className="slide">
        <img src={bg2} alt="Background 2" className="bg-img" />
        <img src={img2} alt="Image 2" className="right-img" />
      </div>
      <div className="slide">
        <img src={bg3} alt="Background 3" className="bg-img" />
        <img src={img3} alt="Image 3" className="right-img" />
      </div>
    </div>
  );
};

export default FirstSec;