import React from 'react';
import './Footer.css';
import 'boxicons/css/boxicons.min.css'; // Ensure you have installed boxicons
import 'material-icons/iconfont/material-icons.css'; // Ensure you have installed material-icons

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="row">
          <div className="column">
            <h2>CONTACT</h2>
            <p className="para">Find out all the ways to enjoy</p>
            <p className="para">luxury residential life around</p>
            <p className="para">the world.</p>
            <p className="letter">A:</p>
            <p className="inside">Acculizein Tech Pvt. Ltd</p>
            <p className="letters">T:</p>
            <p className="inside">+919999999999</p>
          </div>
          <div className="column1">
            <h2>USEFUL LINKS</h2>
            <ul>
              <li><a href="#">News</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">License</a></li>
              <li><a href="#">Term of Service</a></li>
            </ul>
          </div>
          <div className="column2">
            <h2>ENQUIRE</h2>
            <form>
              <input type="text" placeholder="NAME" required />
            </form>
            <form className="form2">
              <input type="email" placeholder="E-MAIL" required />
            </form>
            <span className="material-icons-outlined" id="bax">
              trending_flat
            </span>
            <i className='bx bx-circle' id="bax1"></i>
          </div>
          <div className="icons">
            <div className="under-icons">
              <i className='bx bxl-facebook-square'></i>
              <i className='bx bxl-instagram'></i>
              <i className='bx bxl-youtube'></i>
              <i className='bx bxl-linkedin-square'></i>
            </div>
          </div>
          <span className="underline"></span>
          <div className="last">
            <p className="last-text">MADE WITH KNOWLEDGE FOR</p>
            <p className="last-text1">© UODE INTERACTIVE</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;