import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo.png"

const Footer = () => {
    return (
        <div className='footer'>

            <div className='footer-logo'>
                <img src={logo} alt="logo" />
                <h2>TOTC</h2>
                <div>

                    <p>|   Virtual class for zoom</p>
                </div>
            </div>

            <div className='sub'>
                <h2>Subscribe to get our Newsletter</h2>
                <div className='sub-box'>
                    <input type="email" placeholder="Your Email" />
                    <button>Subscribe</button>
                </div>
            </div>

            <div className='career'>
                <p>Careers | Privacy Policy | Terms & Conditions</p>
                <p> @ 2021 Class Technologies</p>
            </div>

        </div>
    )
}

export default Footer