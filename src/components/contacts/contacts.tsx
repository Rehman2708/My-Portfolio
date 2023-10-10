import React, { useState, useEffect } from "react";
import "./contacts.scss";
import {
  BsFacebook,
  BsWhatsapp,
  BsLinkedin,
  BsInstagram,
  BsEnvelopeOpen,
  BsFillMapFill,
  BsFillTelephoneFill,
  BsGithub,
} from "react-icons/bs";
import AOS from "aos";
import "aos/dist/aos.css";

const handleEmailClick = (email: string) => {
  const mailtoLink = `mailto:${email}`;
  window.location.href = mailtoLink;
};

const handlePhoneClick = (phoneNumber: string) => {
  const telLink = `tel:${phoneNumber}`;
  window.location.href = telLink;
};

const Contacts = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="contacts">
      <div className="contact">
        <div className="contactRow">
          <div className="straightLine"></div>
          <h1 className="headerText contactHead" id="contact">
            Contact Me
          </h1>
          <div className="straightLine"></div>
        </div>
        <div className="contactsGrid flexCenter">
          <div className="gridRow1">
            <a
              data-aos="zoom-out-right"
              href={``}
              onClick={() => handleEmailClick("rehmanscholar321@gmail.com")}
            >
              <div className="card1">
                <BsEnvelopeOpen className="contactCardSvg" />
                rehmanscholar321@gmail.com
              </div>
            </a>
            <a
              data-aos="zoom-out-left"
              href={``}
              onClick={() => handlePhoneClick("+91 8286529560")}
            >
              <div className="card1">
                <BsFillTelephoneFill className="contactCardSvg" />
                +91 8286529560 | +91 9321145007
              </div>
            </a>
          </div>
          <a href="https://goo.gl/maps/XZA8Q5WzJLXDxTAH6" data-aos="zoom-in-up">
            <div className="card1">
              <BsFillMapFill className="contactCardSvg" />
              Mumbai, Maharashtra, India
            </div>
          </a>
        </div>
        <div className="contactRow1 contactRow" data-aos="zoom-out-down">
          <div className="straightLine"></div>
          <h1 className="headerText contactHead">
            <div className="socialIcons flexCenter">
              <a href="https://github.com/Rehman2708">
                <BsGithub className="socialIcon" />
              </a>
              <a href="https://www.linkedin.com/in/abdul-rehman-khan-a43b36233">
                <BsLinkedin className="socialIcon" />
              </a>
              <a href="https://wa.me/918286529560">
                <BsWhatsapp className="socialIcon" />
              </a>
              <a href="https://instagram.com/rehman_khan_2274?igshid=MzNlNGNkZWQ4Mg==">
                <BsInstagram className="socialIcon" />
              </a>
              <a href="https://www.facebook.com/abdulrehman.khan.12382923">
                <BsFacebook className="socialIcon" />
              </a>
            </div>
          </h1>
          <div className="straightLine"></div>
        </div>
      </div>
      <div className="gratitude flexCenter">
        <h1 className="gratitudeText">"Thanks for Scrolling"</h1>
      </div>
    </div>
  );
};

export default Contacts;
