import React from "react";
import "./Hero.css";

import heroImg from "../../assets/hero.png";
import calendarIcon from "../../assets/calendar.png";
import emailIcon from "../../assets/email.png";
import instructorAvatar from "../../assets/man.png";

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="abc">

        <div className="hero-container">

          <div className="text-section">
            <h1>
              <span>Studying</span> Online is now <br />much easier
            </h1>
            <p>
              TOTC is an interesting platform that will teach <br />
              you in a more interactive way
            </p>
            <div className="buttons-group">
              <button className="btn-join-free">Join for free</button>
              <button className="btn-watch">
                <span className="play-icon">▶</span> Watch how it works
              </button>
            </div>
          </div>

          <div className="image-section">
            <div className="hero-image">
            <img src={heroImg} alt="Student thinking"  />
            </div>

            <div className="glass-card card-assisted">
              <div className="icon-wrapper ">
                <img src={calendarIcon} alt="Calendar" />
              </div>
              <div className="card-info">
                <h3>250k</h3>
                <p>Assisted Student</p>
              </div>
            </div>

            <div className="glass-card card-class">
              <div className="card-header">
                <div className="avatar-wrapper">
                  <img src={instructorAvatar} alt="Instructor" className="avatar-img" />
                  <span className="online-dot"></span>
                </div>
                <div className="card-info">
                  <h3>User Experience Class</h3>
                  <p>Today at 12.00 PM</p>
                </div>
              </div>
              <button className="btn-card-join">Join Now</button>
            </div>

            <div className="glass-card card-congrats">
              <div className="icon-wrapper orange-bg">
                <img src={emailIcon} alt="Email" />
              </div>
              <div className="card-info">
                <h3>Congratulations</h3>
                <p>Your admission completed</p>
              </div>
            </div>

            <div className="pink-chart-badge">
              <div className="bar bar-short"></div>
              <div className="bar bar-tall"></div>
              <div className="bar bar-medium"></div>
            </div>

          </div>
        </div>
      </div>
      <div className="bottom-design"></div>
    </div>
  );
};

export default Hero;