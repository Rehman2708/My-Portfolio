import React, { useState, useEffect } from "react";
import "./about.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="about">
      <h1 className="headerText" id="about">
        About
      </h1>
      <div className="aboutData">
        <div className="straightLine"></div>
        <div data-aos="fade-down">
          <p className="aboutPara">
            Enthusiastic and dedicated graduate with a strong foundation in web
            development and a passion for creating efficient and scalable web
            applications and APIs
          </p>
          <p className="aboutPara">
            Seeking a Backend Web Developer position to leverage my skills in
            Node.js and contribute to the growth of a dynamic tech team
          </p>
          <p className="aboutPara">
            To work with an organization where can learn new skills and increase
            my abilities and enhance my technical ,professional and
            interpersonal expertise through success of the organization.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
