import React from "react";
import twitterIcon from "./assets/TwitterIcon.svg";
import facebookIcon from "./assets/FacebookIcon.svg";
import instagramIcon from "./assets/InstagramIcon.png";
import githubIcon from "./assets/GitHubIcon.svg";

export default function Footer(){
    return(
        <div className = "footer">
            <footer className = "footer-container">
                
                <img className = "twitter-icon" src={twitterIcon}></img>
              
                <img className = "facebook-icon" src={facebookIcon}></img>
                
                <img className = "instagram-icon" src={instagramIcon}></img>

                <img className = "github-icon" src ={githubIcon}></img>

            </footer>
        </div>
    )
}