import React from "react";
import classes from "./Footer.module.css";
import linkedin from "../../assets/images/linkedin.svg";
import twitter from "../../assets/images/twitter.svg";
import facebook from "../../assets/images/facebook.svg";

export const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes.first_section}>
        <div className={classes.list_container}>
          <span>Industries</span>
          <ul>
            <li>Lorem Ipsum</li>
            <li>New Courses</li>
            <li>Lorem pprovel</li>
            <li>Certification</li>
            <li>Lorem Ipsum</li>
            <li>New Courses</li>
            <li>approvel</li>
            <li>Lorem Ipsu</li>
            <li>Approvel</li>
            <li>Certification</li>
          </ul>
        </div>
        <div className={classes.list_container}>
          <span>Solutions</span>
          <ul>
            <li>Lorem Ipsum</li>
            <li>New Lorem</li>
            <li>Approvel</li>
            <li>Certification</li>
          </ul>
        </div>
        <div className={classes.list_container}>
          <span>Platform</span>
          <ul>
            <li>Lorem Ipsum</li>
            <li>New</li>
            <li>Lorem opprovel</li>
            <li>Certification</li>
            <li>New</li>
            <li>approvel</li>
            <li>Certification</li>
          </ul>
        </div>
        <div className={classes.list_container}>
          <span>Featured Insights</span>
          <ul>
            <li>Lorem Ipsum</li>
            <li>New</li>
            <li>Approvel</li>
            <li>Certification</li>
            <li>Approvel</li>
            <li>Certification</li>
          </ul>
        </div>
        <div className={classes.list_container}>
          <span>About Us</span>
          <ul>
            <li>Lorem Ipsum</li>
            <li>New Lorem</li>
            <li>Approvel</li>
            <li>Lorem Ipsum</li>
          </ul>
        </div>
        <div className={classes.list_container}>
          <span>Careers</span>
          <ul>
            <li>Lorem Ipsum</li>
            <li>New Courses</li>
            <li>University approvel</li>
            <li>Certification</li>
            <li>Online Degree</li>
            <li>New Courses</li>
            <li>University approvel</li>
            <li>Certification</li>
          </ul>
        </div>
      </div>
      <div className={classes.bottom_section}>
        <span className={classes.copyright_text}>
          Copyright © 2021 Tulfa Inc. All rights reserved.
        </span>
        <div className={classes.social_media_icons}>
          <img src={linkedin} alt="Linkedin" title="Linkedin" className={classes.linkedin}/>
          <img src={facebook} alt="Facebook" title="Facebook" className={classes.facebook}/>
          <img src={twitter} alt="Twitter" title="Twitter" className={classes.twitter}/>
        </div>
      </div>
    </footer>
  );
};
