import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/About/About";
import NameImage from "./components/nameImage/NameImage";
import Skills from "./components/skills/Skills";
import Contacts from "./components/contacts/contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <NameImage />
      <About />
      <Skills />
      <Contacts />
    </div>
  );
}

export default App;
