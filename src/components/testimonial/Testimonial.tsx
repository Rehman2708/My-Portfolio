import "./testimonial.scss";
import testimonialImg from "../../assets/samirt.jpg";
import React, { useState, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
const Testimonial = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });
  return (
    <div className="testimonial">
      <h1 className="headerText">Testimonial</h1>
      <div className="tRow">
        <div className="testimonialData">
          <div className="straightLine"></div>
          <div data-aos="zoom-out-down">
            <p className="testimonialPara">
              Consistently delivered high-quality solutions within deadlines for
              client projects. Experienced in managing and working effectively
              in diverse teams. Enjoy tackling challenging tasks and finding
              innovative solutions. Constantly exploring new technologies and
              staying updated with the latest trends in the industry.
              <h2 className="testimonialAuthor">Samir Khan</h2>
            </p>
          </div>
        </div>
        <div className="backBox" data-aos="zoom-in-up">
          <img
            data-aos="zoom-in-up"
            src={testimonialImg}
            className="testimonialImg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
