import React, { useRef } from "react";
import "./portfolio.scss";

import portfolio1 from "../../assets/portfolioImgs/portfolio1.jpg";
import portfolio2 from "../../assets/portfolioImgs/portfolio2.jpg";
import portfolio3 from "../../assets/portfolioImgs/portfolio3.jpg";
import portfolio4 from "../../assets/portfolioImgs/portfolio4.jpg";
import portfolio5 from "../../assets/portfolioImgs/portfolio5.jpg";
import portfolio6 from "../../assets/portfolioImgs/portfolio6.jpg";
import portfolio7 from "../../assets/portfolioImgs/portfolio7.jpg";
import { BsArrowRight } from "react-icons/bs";

const portfolioArray = [
  {
    name: "Lorem Ipsum",
    image: portfolio1,
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. optio",
  },
  {
    name: "Dolor sit amet",
    image: portfolio4,
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. optio",
  },
  {
    name: "Consectetur adipisicing",
    image: portfolio3,
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. optio",
  },
  {
    name: "Amet consectetur",
    image: portfolio2,
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. optio",
  },
  {
    name: "JavaScript",
    image: portfolio5,
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. optio",
  },
  {
    name: "Ipsum dolor sit",
    image: portfolio6,
    intro: "Lorem ipsum dolor sit amet consectetur adipisicing elit. optio",
  },
];
const Portfolio = () => {
  return (
    <div className="portfolio flexCenter">
      <h1 className="headerText portfolioHeader" id="portfolio">
        Portfolio
      </h1>
      <div className="portfolioCards">
        {portfolioArray.map((ele: any, i: number) => (
          <div className="portfolioCard flexCenter">
            <img className="portfolioImage" src={ele.image} />
            <div className="portfolioData flexCenter">
              <h2 className="portfolioName">{ele.name}</h2>
              <h3 className="portfolioIntro">{ele.intro}</h3>
              <a href="/">
                <button className="portfolioButton flexCenter">
                  See More
                  <BsArrowRight />
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
