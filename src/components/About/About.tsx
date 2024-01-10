import React, { useEffect } from "react";
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
            Results-oriented Junior Engineer with a strong background in web
            development. Proficient in HTML, CSS, and React JS, with a focus on
            designing responsive web applications.
          </p>
          <p className="aboutPara">
            Committed to delivering high-quality work and constantly expanding
            my skills. Seeking an opportunity to contribute my expertise and
            drive innovation in a dynamic organization.
          </p>
          <p className="aboutPara">
            Implemented design principles and paid close attention to detail in
            developing a responsive profile page.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
