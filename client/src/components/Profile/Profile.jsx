import React from 'react';
import './Profile.css';

const Profile = () => {
  return (
    <div className="Container">
      <div className="form">
        <h2>Profile</h2>
        <div className="profile">
          <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="restaurant" className="profile-pic" />
        </div>
        {/* <h4>Image uploaded successfully</h4> */}
        <input type="text" name="name" placeholder="Enter UserName Here" />
        <input type="email" name="Email" placeholder="Enter Email Here" />
        <input type="password" name="password" placeholder="Enter password Here" />
        <button className="bte">
          <a href="#">UPDATE</a>
        </button>
        <button className="btn">
          <a href="#">CREATE LISTING</a>
        </button>
        <div className="Ds">
          <a href="#">Delete Account</a>
          <a href="#">Sign out</a>
        </div>
      </div>
    </div>
  );
};

export default Profile;