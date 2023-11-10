import { useState } from "react";
import { Element, Link as ScrollLink } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import "./AboutUs.scss";
import VideoModal from "../VideoModal/VideoModal";
import Carousel from "react-bootstrap/Carousel";
import OrangeBtn from "./../OrangeBtn/OrangeBtn";
import AnimatedImageContainer from "../../helpers/hooks/AnimatedImageContainer";
import ResizeHandler from "../../helpers/hooks/ResizeHandler";
import image1 from "./../../assets/about-images/about_photo.jpg";
import image2 from "./../../assets/about-images/about_photo1.jpg";
import image3 from "./../../assets/about-images/about_photo2.jpg";
// import ImageSlider from "./../../helpers/ImageSlider/ImageSlider";

function AboutUs() {
  const [showModal, setShowModal] = useState(false);
  const [videoLink, setVideoLink] = useState("");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleOpenModal = (link: string) => {
    setVideoLink(link);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  const animateY = true;

  return (
    <Element name="about">
      <section className="about-container ">
        <div className="left-container">
          <h3 className="about-h3"> ABOUT US</h3>
          <h2 className="about-h2"> With our knowledge we guarantee success</h2>
          <p className="about-p">
            Bringing over 17 years of expertise to the crane and metal
            construction industries, our company specializes in crafting,
            installing, and maintaining robust cranes, as well as other metal
            structures. With a track record of over 1200 completed projects, we
            are dedicated to providing top-quality solutions. Our comprehensive
            services include construction, installation, maintenance, repair,
            and surface coating, ensuring the longevity and reliability of your
            equipment. Trust us to deliver excellence in every aspect of crane
            care.
          </p>
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
                  <img src={image1} alt="Image 1" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="" title="Silda kraana paigaldus">
                  <img src={image2} alt="Image 2" />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="">
                  <div
                    className="play-button"
                    onClick={() =>
                      handleOpenModal(
                        "https://www.youtube.com/embed/sifXs4XVK7g"
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <img src={image3} alt="Image 3" />
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
                  <img src={image1} alt="Image 1" />
                </div>
              </AnimatedImageContainer>

              <AnimatedImageContainer
                threshold={0.2}
                initialY={animateY ? 60 : 0}
                animateY={animateY}
              >
                <div className="photo photo-2" title="Silda kraana paigaldus">
                  <img src={image2} alt="Image 2" />
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
                      handleOpenModal(
                        "https://www.youtube.com/embed/sifXs4XVK7g"
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faPlay} />
                  </div>
                  <img src={image3} alt="Image 3" />
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
      </section>
    </Element>
  );
}

export default AboutUs;
