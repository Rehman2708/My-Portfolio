import React from "react";
import "./experience.scss";
import { BsFillCircleFill } from "react-icons/bs";
const experienceArray = [
  {
    year: "2021",
    name: "Lorem, ipsum.",
    address: "Lorem, Ipsum.",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. optio Lorem ipsum dolor sit amet consectetur adipisicing elit. optioLorem ipsum dolor sit amet consectetur adipisicing elit. optioLorem ipsum dolor sit amet consectetur adipisicing elit. optioLorem ipsum dolor sit amet consectetur adipisicing elit. optioLorem ipsum dolor sit amet consectetur adipisicing elit. optio",
  },

  {
    year: "2021",
    name: "Lorem, ipsum.",
    address: "Lorem, Ipsum.",
    text: "sit amet consectetur am ipsum dolor sit amet consectetur adipiit. optioLorem ipsum dsit amet consectetur adipisicing elit. optioLorem ipsum dolor sit amet consectetur adipisicing elit. optio",
  },
];
const Experience = () => {
  return (
    <div className="experience">
      <h1 className="headerText experienceHeader">Experience</h1>

      {experienceArray.map((ele: any, i: number) => (
        <div className="expData">
          <div className="expRow">
            <h3 className="expYear">{ele.year}</h3>
            <BsFillCircleFill className="expIcon" />
            <h1 className="expComp">{ele.name}</h1>
          </div>
          <div className="expRow1">
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
