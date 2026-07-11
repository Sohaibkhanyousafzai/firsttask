import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-page-wrapper">
      <div className="contact-container">
        <h1 className="contact-heading">Contact Us</h1>
        
        <form className="contact-form">
          
          
          <div className="form-row">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              placeholder="Enter your first name"
              required
            />
          </div>

       
          <div className="form-row">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              placeholder="Enter your last name"
              required
            />
          </div>

   
          <div className="form-row">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Sparkingasai@gmail.com"
              required
            />
          </div>

      
          <div className="form-row">
            <label htmlFor="phone">Contact Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="+923115312771"
              required
            />
          </div>

         
          <div className="form-row">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              placeholder="How can we help you?"
            />
          </div>

          
          <div className="form-row alignment-top">
            <label htmlFor="suggestion">Your Suggestion</label>
            <textarea
              id="suggestion"
              rows="5"
              placeholder="Type your suggestions or feedback here..."
              required
            ></textarea>
          </div>

     
          <div className="form-row submit-row">
            <div className="dummy-spacer"></div>
            <button type="submit" className="submit-btn">
              Submit Form
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};

export default ContactUs;