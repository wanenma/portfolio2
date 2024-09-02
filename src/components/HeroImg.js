import "./HeroImgStyles.css";
import React from 'react';
import Azour from "../assets/azour.jpg";
import {Link} from "react-router-dom";
const HeroImg = () => {
    return (
        <div className="hero">
            <div className="mask">
              <img className="into-img" src={Azour} alt="Azour" />  
            </div>
            <div className="content"> 
                <p>aslam, ism azir</p>
                <h1>Battal mitrasim.</h1>
                <Link to="/project" className="btn">Projects</Link>
                <Link to="/about" className="btn btn-light">About</Link>

                
            </div>
        </div>)
};
export default HeroImg;