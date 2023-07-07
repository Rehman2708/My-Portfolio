import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import NameImage from "./components/nameImage/NameImage";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/contacts";
import Testimonial from "./components/testimonial/Testimonial";
import Experience from "./components/experience/Experience";
import Portfolio from "./components/portfolio/Portfolio";

function App() {
  return (
    <div className="App">
      <Header />
      <NameImage />
      <About />
      <Skills />
      <Portfolio />
      <Experience />
      <Testimonial />
      <Contacts />
    </div>
  );
}

export default App;
