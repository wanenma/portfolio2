import "./FooterStyles.css";
import React from "react";
import {FaHome ,FaPhone ,FaMailBulk, FaFacebook, FaInstagram, FaLinkedin} from "react-icons/fa"


const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                    <h4><FaHome size={20} style={{color:"white", marginRight:"2rem"}}/>3anid il mosh</h4>
                    </div>
                    <div>
                        
                    </div>
                    <div className="phone">
                    <h4> <FaPhone size={20} style={{color:"white", marginRight:"2rem"}} />51034382</h4>
                    </div>
                    <div className="email">
                    <h4> <FaMailBulk size={20} style={{color:"white", marginRight:"2rem"}} />feetlover@gmail.com</h4>
                    </div>
                    
                   
                </div>
                <div className="right">
                    <h4>About me</h4>
                    <p>had sit ta3 an noso masro9 w nos mna9il mana3rif na3mil shay
                        ma3nd hat amal fil hayat kan il t3ab had maykhadmnish aa krib nogtil ro7
                    </p>
                    <div className="social">
                        <FaFacebook size={20} style={{color:"white", marginRight:"1rem"}} />
                        <FaInstagram size={20} style={{color:"white", marginRight:"1rem"}} />
                        <FaLinkedin size={20} style={{color:"white", marginRight:"1rem"}} />
                    </div>    
                    
                </div>
            </div>
        </div>
    )
}   

export default Footer