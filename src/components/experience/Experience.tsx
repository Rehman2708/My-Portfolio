import React from "react";
import "./experience.scss";
import { BsFillCircleFill } from "react-icons/bs";
const Experience = () => {
  return (
    <div className="experience">
      <h1 className="headerText experienceHeader">Experience</h1>
      <div className="expData">
        <div className="expRow">
          <h3 className="expYear">2021</h3>
          <BsFillCircleFill className="expIcon" />
          <h1 className="expComp">Lorem, ipsum.</h1>
        </div>
        <div className="expRow1">
          <h2 className="expCompAdd">
            Lorem, ipsum.
            <p className="expCompText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. optio
              sequi. Accusantium est exercitationem delectus aperiam praesentium
              tempora dignissimos similique vitae. Soluta molestiae reiciendis
              repellat, atque id et unde tenetur, nemo, blanditiis doloribus
              Lorem ipsum dolor sit amet consectetur adipisicing elit. optio
              sequi. Accusantium est exercitationem delectus aperiam praesentium
              tempora dignissimos similique vitae. Soluta molestiae reiciendis
              repellat, atque id et unde tenetur, nemo, blanditiis doloribus
              aspernatur.
            </p>
          </h2>
        </div>
      </div>
      <div className="expData">
        <div className="expRow">
          <h3 className="expYear">2021</h3>
          <BsFillCircleFill />
          <h1 className="expComp">Lorem, ipsum.</h1>
        </div>
        <div className="expRow1">
          <h2 className="expCompAdd">
            Lorem, ipsum.
            <p className="expCompText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. optio
              sequi. Accusantium est exercitationem delectus aperiam praesentium
              tempora dignissimos similique vitae. Soluta molestiae reiciendis
            </p>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Experience;
