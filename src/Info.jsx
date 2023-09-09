import React from "react";
import profilePic from "./assets/Julie_JobPic.jpg";

export default function Info(){
    return(
        <div>
           
        {/* <img className = "image-profile" src = {profilePic} /> */}
       
       
        <h1 className = "info-name">Julie Pitney</h1>
        <h2 className = "job-title">Software Developer|Project/Product Manager</h2>
        <div className="button-container">
            <div className = "button-email"><span className = "email-icon"></span><a href="http://www.cnn.com">Email</a></div>
            <button className = "button-linkedin"><i class="fa-brands fa-linkedin"></i>LinkedIn</button>
        </div>
        </div>
    )
}