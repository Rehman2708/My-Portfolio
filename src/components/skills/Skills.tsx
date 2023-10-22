import React, { useState, useEffect } from "react";

import "./skills.scss";
import htmlLogo from "../../assets/htmlLogo.png";
import cssLogo from "../../assets/cssLogo.png";
import jsLogo from "../../assets/jsLogo.png";
import sassLogo from "../../assets/node.png";
import AOS from "aos";
import "aos/dist/aos.css";
const skillsArray = [
  {
    name: "HTML",
    image: htmlLogo,
  },
  {
    name: "CSS",
    image: cssLogo,
  },
  {
    name: "Node",
    image: sassLogo,
  },
  {
    name: "JavaScript",
    image: jsLogo,
  },
];
const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="skills flexCenter">
      <h1 className="headerText skillsHeader">My Skills</h1>
      <div className="skillCards">
        {skillsArray.map((ele: any, i: number) => (
          <div className="skillCard flexCenter" data-aos="flip-left">
            <img className="skillImage" src={ele.image} />
            <h2 className="skillName">{ele.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
