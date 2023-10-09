import "./portfolio.scss";
import React, { useRef, useEffect } from "react";

import portfolio1 from "../../assets/portfolioImgs/portfolio1.png";
import portfolio2 from "../../assets/portfolioImgs/portfolio2.png";
import portfolio3 from "../../assets/portfolioImgs/portfolio3.png";
import portfolio4 from "../../assets/portfolioImgs/portfolio4.png";
import portfolio5 from "../../assets/portfolioImgs/portfolio5.jpg";
import portfolio6 from "../../assets/portfolioImgs/portfolio6.jpg";
import portfolio7 from "../../assets/portfolioImgs/portfolio7.jpg";
import { BsArrowRight } from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";
const portfolioArray = [
  {
    name: "My Portfolio",
    image: portfolio1,
    intro: "Responsive Portfolio using HTML, SCSS & React",
    link: "https://abdulrehman-portfolio.netlify.app",
  },
  {
    name: "Flipkart Clone",
    image: portfolio4,
    intro: "Responsive flipkart clone using HTML, SCSS & React",
    link: "https://flipkart-clone-abdul.netlify.app",
  },
  {
    name: "LandScaper Site",
    image: portfolio3,
    intro: "Basic LandScaper site using HTML & CSS",
    link: "https://landscaper-basic.netlify.app",
  },
  {
    name: "Mountain Trekking Site",
    image: portfolio2,
    intro: "Basic Mountain Trekking Site using HTML & CSS",
    link: "https://mountain-trekking-basic.netlify.app",
  },
  {
    name: "Hardcoded",
    image: portfolio5,
    intro: "Hardcoded",
  },
  {
    name: "Hardcoded",
    image: portfolio6,
    intro: "Hardcoded",
  },
];
const Portfolio = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="portfolio flexCenter">
      <h1 className="headerText portfolioHeader" id="portfolio">
        Portfolio
      </h1>
      <div className="portfolioCards">
        {portfolioArray.map((ele: any, i: number) => (
          <div className="portfolioCard flexCenter " data-aos="flip-left">
            <img className="portfolioImage" src={ele.image} />
            <div className="portfolioData flexCenter">
              <h2 className="portfolioName">{ele.name}</h2>
              <h3 className="portfolioIntro">{ele.intro}</h3>
              <a href={ele.link}>
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
