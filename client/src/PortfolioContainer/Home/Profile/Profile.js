import React from "react";
import Typical from 'react-typical';
import './Profile.css';
import ScrollService from '../../../utilities/ScrollService'
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className='colz-icon'>
            <a href="https://sites.google.com/view/akshitsingla/home"target='_blank'>
              <i className="fa fa-google"></i>
            </a>
            <a href="https://www.linkedin.com/in/akshit-singla-codinghero/"target='_blank'>
               <i className="fa fa-linkedin-square"></i>
            </a>
            <a href="https://www.instagram.com/akshitk492/"target='_blank' >
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://github.com/Akshit492"target='_blank'>
              <i className="fa fa-github-square"></i>
            </a>
            <a href="https://twitter.com/home?lang=en" target='_blank'>
              <i className="fa fa-twitter"></i>
            </a>
            </div>
          </div>

          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'M <span className="highlighted-text">Akshit</span>
            </span>
          </div>
          <div className='profile-details-role'>
              <span className='primary-text'>
                   {" "}
                   <h1>
                       {" "}
                       <Typical
                       loop={Infinity}
                       steps={[
                           "Enthusiastic Dev 💻 ",
                           1000,
                           "Competitive Coder 🌐",
                           1000,
                           "Student 🤵" ,
                           1000,
                           "Front-End Developer 📱 ",
                           1000
                       ]}
                       />
                   </h1>
                   <span className='profile-role-tagline'>
                     A student ameliorating  his skills in Front and Back End Development. 
                   </span>
              </span>
          </div>
          <div className='profile-options'>
            <button className='btn primary-btn'
              onClick={()=>ScrollService.scrollHandler.scrolltoHireMe()}
              >{""}
              Contact Me{" "}
            </button>
             <a href="https://drive.google.com/file/d/1LjbUyCmgWJpeqj3UViCrg3_kUUzkrsRe/view?usp=sharing" target='_blank' >
              <button className='btn highlighted-btn'>Get Resume</button>
            </a>
          </div>
        </div>
        <div className='profile-picture'>
          <div className='profile-picture-background'>

          </div>
        </div>
      </div>
    </div>
  );
}
