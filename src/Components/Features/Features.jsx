import React from "react";
import "./Features.css";
import Headings1 from "../Headings1";
import teacher1 from "../../assets/teacher1.png";
import teacher2 from "../../assets/teacher2.png";
import teacher3 from "../../assets/teacher3.png";
import teacher4 from "../../assets/teacher4.png";
import teacher5 from "../../assets/teacher5.png";

import { FaThLarge, FaBook, FaUsers } from "react-icons/fa";

const Features = () => {
  return (
    <div className="features">
      <Headings1 blueTextStart={"Our"} cyanTextMid={"Features"} />

      <p className="feature-para">
        This very extraordinary feature, can make learning activities more
        efficient
      </p>

      <div className="feature-content">
        
        <div className="feature-left">
          <div className="meeting-card">

            <div className="window-bar">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <div className="meeting-grid">
              <img src={teacher1} alt="" className="big-user" />
              <img src={teacher2} alt="" className="small-user" />
              <img src={teacher3} alt="" className="small-user" />
              <img src={teacher4} alt="" className="small-user" />
              <img src={teacher5} alt="" className="small-user" />
            </div>

            <div className="meeting-buttons">
              <button className="present-btn">Present</button>
              <button className="call-btn">Call</button>
            </div>
          </div>
        </div>

        <div className="feature-right">
          <h2>
            A <span>user interface</span> designed
            <br />
            for the classroom
          </h2>

          <div className="feature-item">
            <div className="icon-box">
              <FaThLarge />
            </div>
            <p>
              Teachers don't get lost in the grid view and have a dedicated Podium space.
            </p>
          </div>

          <div className="feature-item">
            <div className="icon-box">
              <FaBook />
            </div>
            <p>
              TA's and presenters can be moved to the front of the class.
            </p>
          </div>

          <div className="feature-item">
            <div className="icon-box">
              <FaUsers />
            </div>
            <p>
              Teachers can easily see all students and class data at one time.
            </p>
          </div>
        </div>
      </div>

      

    </div>
  );
};

export default Features;