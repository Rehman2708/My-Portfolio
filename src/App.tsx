import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.scss";
import Header from "./components/header/Header";
import About from "./components/about/About";
import NameImage from "./components/nameImage/NameImage";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/contacts";
import Testimonial from "./components/testimonial/Testimonial";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";
import { BsFillLightbulbFill, BsFillLightbulbOffFill } from "react-icons/bs";

function App() {
  const [lightTheme, setLightTheme] = useState(false);

  const toggleTheme = () => {
    setLightTheme(!lightTheme);
  };

  return (
    <div className={lightTheme ? "app" : "app lightApp"}>
      <button
        className={lightTheme ? "themeButton" : "themeButton themeButton1"}
        onClick={toggleTheme}
      >
        {lightTheme ? <BsFillLightbulbFill /> : <BsFillLightbulbOffFill />}
        {lightTheme ? "Light" : "Dark"}
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
