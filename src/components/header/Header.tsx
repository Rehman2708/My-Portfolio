import React from "react";
import "./header.scss";
import TextField from "@mui/material/TextField";
import { BsSearch } from "react-icons/bs";
const Header = () => {
  return (
    <div className="header">
      <h1 className="headerH1">AR</h1>
      <div className="headerOptions">
        <button className="headerOptionButton">About</button>
        <button className="headerOptionButton">Portfolio</button>
        <button className="headerOptionButton">Contact</button>
      </div>
      <div className="headerInputDiv">
        <input
          className="headerInput"
          placeholder="Search"
          type="text"
          name=""
          id=""
        />
        <BsSearch />
      </div>
    </div>
  );
};

export default Header;
