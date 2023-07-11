import React from "react";
import "./testimonial.scss";
import testimonialImg from "../../assets/testimonial1.png";
const Testimonial = () => {
  return (
    <div className="testimonial">
      <h1 className="headerText">Testimonial</h1>
      <div className="tRow">
        <div className="testimonialData">
          <div className="straightLine"></div>
          <div>
            <p className="testimonialPara">
              Consistently delivered high-quality solutions within deadlines for
              client projects. Experienced in managing and working effectively
              in diverse teams. Enjoy tackling challenging tasks and finding
              innovative solutions. Constantly exploring new technologies and
              staying updated with the latest trends in the industry.
              <h2 className="testimonialAuthor">Rehman Khan</h2>
            </p>
          </div>
        </div>
        <div className="backBox">
          <img src={testimonialImg} className="testimonialImg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
