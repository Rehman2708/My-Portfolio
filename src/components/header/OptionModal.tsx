import { Modal } from "@mui/material";
import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdOutlineClear } from "react-icons/md";
import { Link } from "react-scroll";

import "./optionmodal.scss";
const OptionModal = () => {
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };
  return (
    <>
      <AiOutlineMenu onClick={toggleModal} className="menuIcon" />
      {modal && (
        <div className="optionModal flexCenter">
          <MdOutlineClear className="closeIcon" onClick={toggleModal} />
          <Link
            className="modalOptionButtons"
            activeClass="active"
            to="about"
            smooth={true}
            offset={-100}
            duration={700}
          >
            About
          </Link>
          <Link
            className="modalOptionButtons"
            activeClass="active"
            to="portfolio"
            smooth={true}
            offset={-30}
            duration={1000}
          >
            Portfolio
          </Link>
          <Link
            className="modalOptionButtons"
            activeClass="active"
            to="contact"
            smooth={true}
            offset={0}
            duration={1300}
          >
            Contact
          </Link>
        </div>
      )}
    </>
  );
};

export default OptionModal;
