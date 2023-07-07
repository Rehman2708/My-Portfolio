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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              vitae minima ab velit maiores quisquam animi rem minus ea delectus
              perspiciatis error, eum atque cupiditate aspernatur iste
              reiciendis consequatur nobis corporis architecto nesciunt et?
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
