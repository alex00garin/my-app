import React from 'react';
import './profilePage.css';
import personalImage from './images/personal-image.png';

const ProfilePage = () => {
  return (
    <div className="profile">
    <img src={personalImage} alt="Profile" className="profile-image" />
    <h1 className="profile-name">Alex Garin</h1>
      <h2 className="profile-title">Software Engineer</h2>
      <div className="contact-info">
        <p>Email: mr.alex.garin@gmail.com</p>
        <p>Phone: +447774507702</p>
      </div>
      <div className="profile-bio">
        <h3>About</h3>
        <p>
         I am a man with a CAPITAL LETTER M. I am so cool and bla blabla bla... 
        </p>
      </div>
      <div className="profile-experience">
        <h3>Professional Experience</h3>
        <ul>
          <li>Company A - Software Engineer (2018-2021)</li>
          <li>Company B - Frontend Developer (2016-2018)</li>
        </ul>
      </div>
      <div className="profile-skills">
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
};

export default ProfilePage;
