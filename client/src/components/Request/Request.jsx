import React from 'react';
import './Request.css';

const RequestComponent = () => {
  return (
    <div className="back">
      <div className="request-body">
        <div className="container">
          <div className="form-container">
            <h1>REQUEST A VISIT</h1>
            <form>
              <input type="text" name="full_name" placeholder="FULL NAME" />
              <input type="email" name="mail" placeholder="E-MAIL" />
              <div className="date-time">
                <input type="date" name="visit_date" required />
                <input type="time" name="visit_time" placeholder="TIME" />
              </div>
              <textarea name="message" placeholder="MESSAGE" rows="4"></textarea>
              <button type="submit">CONTACT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestComponent;