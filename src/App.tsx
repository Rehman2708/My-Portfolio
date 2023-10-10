import React, { useState } from "react";
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";
import NameImage from "./components/nameImage/NameImage";
import Skills from "./components/skills/Skills";
import Testimonial from "./components/testimonial/Testimonial";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import {
  BsFillLightbulbFill,
  BsFillLightbulbOffFill,
  BsMoon,
  BsSun,
} from "react-icons/bs";
import Contacts from "./components/contacts/Contacts";

function App() {
  const [lightTheme, setLightTheme] = useState(false);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <div className={lightTheme ? "app" : "app lightApp"}>
      <button
        className={
          lightTheme
            ? "themeButton flexCenter shadowDiv"
            : "themeButton themeButton1 flexCenter shadowDiv"
        }
        onClick={toggleTheme}
      >
        {lightTheme ? <BsSun /> : <BsMoon />}
        {/* {lightTheme ? "Light" : "Dark"} */}
      </button>

      <div className="shadowDiv">
        <Header />
        <NameImage />
      </div>
      <About />
      <Skills />
      <Portfolio />
      <div className="shadowDiv">
        <Experience />
      </div>
      <Testimonial />
      <div className="shadowDiv">
        <Contacts />
      </div>
    </div>
  );
}

export default App;
