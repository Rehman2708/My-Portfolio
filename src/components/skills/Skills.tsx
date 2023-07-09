import React from "react";
import "./skills.scss";
import htmlLogo from "../../assets/htmlLogo.png";
import cssLogo from "../../assets/cssLogo.png";
import jsLogo from "../../assets/jsLogo.png";
import sassLogo from "../../assets/sassLogo.png";
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
    name: "SASS",
    image: sassLogo,
  },
  {
    name: "JavaScript",
    image: jsLogo,
  },
];
const Skills = () => {
  return (
    <div className="skills flexCenter">
      <h1 className="headerText skillsHeader">My Skills</h1>
      <div className="skillCards">
        {skillsArray.map((ele: any, i: number) => (
          <div className="skillCard flexCenter">
            <img className="skillImage" src={ele.image} />
            <h2 className="skillName">{ele.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
