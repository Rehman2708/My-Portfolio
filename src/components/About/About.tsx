import React from "react";
import "./about.scss";
const About = () => {
  return (
    <div className="about">
      <h1 className="headerText">About</h1>
      <div className="aboutData">
        <div className="straightLine"></div>
        <div>
          <p className="aboutPara">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
            vitae minima ab velit maiores quisquam animi rem minus ea delectus
            perspiciatis error, eum atque cupiditate aspernatur iste reiciendis
            consequatur nobis corporis architecto nesciunt et?
          </p>
          <p className="aboutPara">
            Sit error saepe quo velit ipsum nesciunt repudiandae vero
            repellendus provident impedit provident distinctio sapiente
            necessitatibus quos officiis id error esse. Nesciunt sit odit
            possimus laudantium eum mollitia delectus molestiae sed doloremque
            rem esse ipsum incidunt, quibusdam officiis quae?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
