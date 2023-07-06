import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import About from "./components/About/About";
import NameImage from "./components/nameImage/NameImage";

function App() {
  return (
    <div className="App">
      <Header />
      <NameImage />
      {/* <About /> */}
    </div>
  );
}

export default App;
