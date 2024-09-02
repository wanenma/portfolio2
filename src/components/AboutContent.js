import "./AboutContent.css";
import React from "react";
import { Link } from "react-router-dom";
import a33 from "../assets/a33.jpg";
import sagin from "../assets/sagin.jpg";

const AboutContent = () => {
    return (
        <div className="about" >
            <div className="left">
                <h2>Who am I?</h2>
                <p>wahid yhawil y3ish oumouri mish f jben nokil nitran norgid please algol khidm</p>
                <Link to="/contact"><button className="btn">Contact</button></Link>
            </div>
            <div className="right">
                <div className="image-container">
                    <div className="image-stack top">
                        <img src={a33} className="img" alt="a33" />
                    </div> 
                    <div className="image-stack bottom">
                        <img src={sagin} className="img" alt="sagin" />
                    </div>   
                </div>    
            </div>    
        </div>
    )
}

export default AboutContent