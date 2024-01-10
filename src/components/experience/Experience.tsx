import "./experience.scss";
import { BsFillCircleFill } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";

const experienceArray = [
  {
    year: "2017",
    name: "High School",
    address: "Mumbai,Maharashtra",
    text: "Completed high school from Adarsh English High School in Mumbai with the Maharashtra state board. I've score 408 Marks outoff 500 i.e. 81.60%. The best score out of all sublect is 95/100 in Mathematics.",
  },

  {
    year: "2019",
    name: "Junior College",
    address: "Mumbai,Maharashtra",
    text: "Completed Junior college from Guru Nanak Khalsa College of Arts, Science & commerce in Mumbai in science stream with the Maharashtra state board.",
  },
  {
    year: "2022",
    name: "B.Sc(IT)",
    address: "Mumbai,Maharashtra",
    text: "Completed Graduation from Vidyalankar School of Information Technology in Mumbai in Information Technology field. The overall CGPA of all semesters is 8.12.",
  },
  {
    year: "2023",
    name: "Junior Engineer",
    address: "BYLDD",
    text: "Working at the post of Junior Engineer in an It based company named BYLDD since November 2022. My work here is to design the frontend.",
  },
];
const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="experience">
      <h1 className="headerText experienceHeader">Education & Experience</h1>

      {experienceArray.map((ele: any, i: number) => (
        <div className="expData">
          <div className="expRow" data-aos="zoom-in-right">
            <h3 className="expYear">{ele.year}</h3>
            <BsFillCircleFill className="expIcon" />
            <h1 className="expComp">{ele.name}</h1>
          </div>
          <div className="expRow1" data-aos="zoom-in-left">
            <h2 className="expCompAdd">
              {ele.address}
              <p className="expCompText">{ele.text}</p>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Experience;
