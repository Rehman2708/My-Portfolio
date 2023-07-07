import React from "react";
import "./portfolio.scss";

import sassLogo from "../../assets/Screenshot (202).png";
const portfolioArray = [
  {
    name: "HTML",
    image: sassLogo,
  },
  {
    name: "CSS",
    image: sassLogo,
  },
  {
    name: "SASS",
    image: sassLogo,
  },
  {
    name: "JavaScript",
    image: sassLogo,
  },
  {
    name: "JavaScript",
    image: sassLogo,
  },
  {
    name: "JavaScript",
    image: sassLogo,
  },
];
const Portfolio = () => {
  return (
    <div className="portfolio">
      <h1 className="headerText portfolioHeader">Portfolio</h1>
      <div className="portfolioCards">
        {portfolioArray.map((ele: any, i: number) => (
          <div className="portfolioCard">
            <img className="portfolioImage" src={ele.image} />
            <h2 className="portfolioName">{ele.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
