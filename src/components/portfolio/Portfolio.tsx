import "./portfolio.scss";
import React, { useEffect } from "react";

import portfolio1 from "../../assets/portfolioImgs/portfolio1.png";
import portfolio2 from "../../assets/portfolioImgs/portfolio2.png";
import portfolio3 from "../../assets/portfolioImgs/portfolio3.png";
import portfolio4 from "../../assets/portfolioImgs/portfolio4.png";
import portfolio5 from "../../assets/portfolioImgs/portfolio5.png";
import portfolio7 from "../../assets/portfolioImgs/portfolio7.png";
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
    link: "https://rad-bonbon-6b6619.netlify.app/",
  },
  {
    name: "Mind Game",
    image: portfolio7,
    intro: "This game we used to play in our childhood, Must try",
    link: "https://mindreadinggame.netlify.app",
  },
  {
    name: "My profile Card",
    image: portfolio5,
    intro: "Responsive profile card with hover animation",
    link: "https://abdul-rehman-profilecard.netlify.app",
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
          <div
            className="portfolioCard flexCenter shadowDiv"
            data-aos="flip-left"
          >
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
