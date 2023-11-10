import React, { useState } from "react";
import "./Contacts.scss";
import AnimatedImageContainer from "../../helpers/hooks/AnimatedImageContainer";
import ResizeHandler from "../../helpers/hooks/ResizeHandler";
import icon4 from "./../../assets/contacts-images/phone-icon.jpg";
import icon5 from "./../../assets/contacts-images/email-icon.jpg";
import { Element } from "react-scroll";

interface ContactPhone {
  title: "Phone";
  fphone: string;
  sphone: string;
  icon: string;
}

interface ContactEmail {
  title: "E-mail";
  femail: string;
  semail: string;
  icon: string;
}

type ContactItem = ContactPhone | ContactEmail;

const openGoogleMaps = () => {
  window.open("https://maps.app.goo.gl/GnotMTQUausaTFKR9");
};

const Contacts: React.FC = () => {
  const mainContacts: ContactItem[] = [
    {
      title: "Phone",
      fphone: "+3729492923",
      sphone: "+3725939292",
      icon: icon4,
    },
    {
      title: "E-mail",
      femail: "first.email@example.com",
      semail: "second.email@example.com",
      icon: icon5,
    },
  ];

  // Render function with the correct type phone/email
  const renderContactInfo = (contact: ContactItem) => {
    switch (contact.title) {
      case "Phone":
        return (
          <>
            <a href={`tel:${contact.fphone}`} aria-label={`Call ${contact.fphone}`}>{contact.fphone}</a>
            <a href={`tel:${contact.sphone}`} aria-label={`Call ${contact.sphone}`}>{contact.sphone}</a>
          </>
        );
      case "E-mail":
        return (
          <>
            <a href={`mailto:${contact.femail}`} aria-label={`Email ${contact.femail}`}>{contact.femail}</a>
            <a href={`mailto:${contact.semail}`} aria-label={`Email ${contact.semail}`}>{contact.semail}</a>
          </>
        );
      default:
        return null;
    }
  };

  // Motion
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Determine whether to animate along the x-axis or y-axis depending on screen size
  const animateX = windowWidth > 1240;
  const animateY = windowWidth <= 1240;

  return (
    <Element name="contacts" className="contact-container">
      <div className="map-container" onClick={openGoogleMaps}></div>
      <div className="details-container">
        <ResizeHandler setWindowWidth={setWindowWidth} />
        <AnimatedImageContainer
          threshold={0.2}
          initialX={animateX ? -60 : 0}
          initialY={animateY ? 60 : 0}
          className="left-contact-container"
          animateX={animateX}
          animateY={animateY}
        >
          <div className="adress-container">
            <h5>ADDRESS:</h5>
            <h1>Monumendi, Laagri, 76401 Harju maakond</h1>
          </div>
        </AnimatedImageContainer>
        <AnimatedImageContainer
          threshold={0.2}
          initialX={animateX ? 60 : 0}
          initialY={animateY ? 60 : 0}
          className="right-contact-container"
          animateX={animateX}
          animateY={animateY}
        >
          {mainContacts.map((data, index) => (
            <li key={index} className="contact-items">
              <div className="contact-icon-container">
                <img src={data.icon} alt={data.title} className="icons-img" />
              </div>
              <div className="activity-info-data">
                <label className="sub-heading-5">{data.title}</label>
                {renderContactInfo(data)}
              </div>
            </li>
          ))}
        </AnimatedImageContainer>
      </div>
    </Element>
  );
};

export default Contacts;
