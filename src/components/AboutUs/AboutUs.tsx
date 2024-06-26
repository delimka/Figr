import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Element, Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.scss";
import VideoModal from "../VideoModal/VideoModal";
import Carousel from "react-bootstrap/Carousel";
import OrangeBtn from "./../OrangeBtn/OrangeBtn";
import AnimatedImageContainer from "../../helpers/hooks/AnimatedImageContainer";
import ResizeHandler from "../../helpers/hooks/ResizeHandler";

import image1_sm from "./../../assets/about-images/about_photo_sm.webp";
import image1_xs from "./../../assets/about-images/about_photo_xs.webp";
import image2_sm from "./../../assets/about-images/about_photo1_sm.webp";
import image3 from "./../../assets/about-images/about_photo2_md.webp";
import image3_sm from "./../../assets/about-images/about_photo2_sm.webp";

function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const { t } = useTranslation();

  const handleOpenModal = (link: string) => {
    setVideoLink(link);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const animateY = true;

  return (
    <Element name="about" className="about-container">
      <div className="left-container">
        <h3 className="about-h3"> {t("aboutUs.aboutHeading")}</h3>
        <h2 className="about-h2"> {t("aboutUs.subHeading")}</h2>
        <p className="about-p">{t("aboutUs.description")} </p>
        <ScrollLink
          activeClass="active"
          to="services"
          spy={true}
          smooth={true}
          offset={-70}
          duration={300}
        >
          <OrangeBtn>Learn more&nbsp;&nbsp;&nbsp;→</OrangeBtn>
        </ScrollLink>
      </div>

      <ResizeHandler setWindowWidth={setWindowWidth} />
      <div className="right-container">
        {windowWidth < 1086 ? (
          <Carousel>
            <Carousel.Item>
              <div className="" title="Metallkonstruktsiooni paigaldus">
                <img
                  src={image1_sm}
                  loading="lazy"
                  alt="Metallkonstruktsiooni paigaldus"
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="" title="Silda kraana paigaldus">
                <img src={image2_sm} alt="Image 2" loading="lazy" />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="">
                <div
                  className="play-button"
                  onClick={() =>
                    handleOpenModal(
                      "https://www.youtube.com/watch?v=oSyC8pxJdeQ"
                    )
                  }
                >
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <img
                  alt="Image 3"
                  loading="lazy"
                  srcSet={`${image3_sm} 480w, ${image3} 1200w`}
                />
              </div>
            </Carousel.Item>
          </Carousel>
        ) : (
          <>
            <AnimatedImageContainer
              threshold={0.2}
              initialY={animateY ? 60 : 0}
              animateY={animateY}
            >
              <div
                className="photo photo-1"
                title="Metallkonstruktsiooni paigaldus"
              >
                <img
                  src={image1_xs}
                  loading="lazy"
                  alt="Metallkonstruktsiooni paigaldus"
                />
              </div>
            </AnimatedImageContainer>

            <AnimatedImageContainer
              threshold={0.2}
              initialY={animateY ? 60 : 0}
              animateY={animateY}
            >
              <div className="photo photo-2" title="Silda kraana paigaldus">
                <img src={image2_sm} alt="Image 2" loading="lazy" />
              </div>
            </AnimatedImageContainer>

            <AnimatedImageContainer
              threshold={0.2}
              initialY={animateY ? 60 : 0}
              animateY={animateY}
            >
              <div className="photo photo-3">
                <div
                  className="play-button"
                  onClick={() =>
                    handleOpenModal("https://www.youtube.com/embed/sifXs4XVK7g")
                  }
                >
                  <FontAwesomeIcon icon={faPlay} />
                </div>
                <img src={image3} alt="Image 3" loading="lazy" />
              </div>
            </AnimatedImageContainer>

            <VideoModal
              show={showModal}
              handleClose={handleCloseModal}
              videoLink={videoLink}
            />
          </>
        )}
      </div>
    </Element>
  );
}

export default AboutUs;
