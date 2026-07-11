import React from "react";
import "./Totc.css";
import totc1 from "../../assets/totc1.png"
import totc2 from "../../assets/totc2.png"
import Headings1 from "../Headings1";





const Totc = () => {
  return (
    <div className="totc">
      <Headings1 
        blueTextStart={"What is"}
        cyanTextMid={"TOTC"}      
      />
      

      <p className="desc">
        TOTC is a platform that allows educators to create online classes whereby they can 
        store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.
      </p>

      
      <div className="card-container">

        <div className="image-card">
          <img src={totc1} alt="card1" />

          <div className="overlay">
            <h3>FOR INSTRUCTIONS</h3>
            <button>Start a class today</button>
          </div>
        </div>

        <div className="image-card">
          <img src={totc2} alt="card2" />

          <div className="overlay">
            <h3>FOR STUDENTS</h3>
            <button className="btn-blue">Enter access code</button>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Totc;