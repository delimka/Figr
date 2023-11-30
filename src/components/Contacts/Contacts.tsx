import React, { useState } from "react";
import { useTranslation } from "react-i18next";
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

const Contacts: React.FC = () => {
  const { t } = useTranslation();

  const mainContacts: ContactItem[] = [
    {
      title: "Phone",
      fphone: "+3725266828",
      sphone: "+3725939292",
      icon: icon4,
    },
    {
      title: "E-mail",
      femail: "first.email@example.com",
      semail: "pavel.pissarenko@figr.ee",
      icon: icon5,
    },
  ];

  // Render function with the correct type phone/email
  const renderContactInfo = (contact: ContactItem) => {
    switch (contact.title) {
      case "Phone":
        return (
          <>
            <a
              href={`tel:${contact.fphone}`}
              aria-label={`Call ${contact.fphone}`}
            >
              {contact.fphone}
            </a>
            <a
              href={`tel:${contact.sphone}`}
              aria-label={`Call ${contact.sphone}`}
            >
              {contact.sphone}
            </a>
          </>
        );
      case "E-mail":
        return (
          <>
            <a
              href={`mailto:${contact.femail}`}
              aria-label={`Email ${contact.femail}`}
            >
              {contact.femail}
            </a>
            <a
              href={`mailto:${contact.semail}`}
              aria-label={`Email ${contact.semail}`}
            >
              {contact.semail}
            </a>
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d65116.46958020667!2d24.5482938676209!3d59.33479574252515!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692bfef2bc72f73%3A0x546a47e1c918db70!2zRmlnciBPw5w!5e0!3m2!1sen!2see!4v1700518029995!5m2!1sen!2see"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-container"
      ></iframe>
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
            <h5>{t("contacts.address")}</h5>
            <h1>Monumendi, Laagri, 76401 Harju maakond</h1>
          </div>
        </AnimatedImageContainer>
        <AnimatedImageContainer
          threshold={0.2}
          initialX={animateX ? 60 : 0}
          initialY={animateY ? 15 : 0}
          className="right-contact-container"
          animateX={animateX}
          animateY={animateY}
        >
          {" "}
          <ul>
            {mainContacts.map((data, index) => (
              <li key={index} className="contact-items">
                <div className="contact-icon-container">
                  <img
                    src={data.icon}
                    alt={data.title}
                    className="icons-img"
                    loading="lazy"
                  />
                </div>
                <div className="activity-info-data">
                  <label className="sub-heading-5">{data.title}</label>
                  {renderContactInfo(data)}
                </div>
              </li>
            ))}
          </ul>
        </AnimatedImageContainer>
      </div>
    </Element>
  );
};

export default Contacts;
