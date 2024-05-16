import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./Projects.scss";
import AnimatedImageContainer from "../../helpers/hooks/AnimatedImageContainer";
import ModalImage from "../../helpers/hooks/ModalImage";
import OrangeBtn from "./../OrangeBtn/OrangeBtn";
import image1 from "./../../assets/pages/production/image2.webp";
import image2 from "./../../assets/projects/project2.webp";
import image3 from "./../../assets/pages/production/image3.webp";
import image4 from "./../../assets/projects/project4.webp";
import image5 from "./../../assets/projects/project5.webp";
import { useNavigate } from "react-router-dom";


function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleImageClick = (index: number) => {
    console.log("handleImageClick called");
    setShowModal(true);
    setSelectedImage(index);
  };

  const handleCloseModal = () => {
    console.log("handleCloseModal called");
    setShowModal(false);
    setSelectedImage(null);
  };
  return (
    <div className="projects-container">
      <h2>{t("project.headingTop")}</h2>
      <h1>{t("project.subHeading")}</h1>
      <div className="grid-container">
        <AnimatedImageContainer
          threshold={0.2}
          yValue={-10}
          className="grid-item double-row"
          onClick={() => handleImageClick(0)}
        >
          <div className="project-photo project-photo-1">
            <img src={image1} alt="Project 1" loading="lazy" />
          </div>
        </AnimatedImageContainer>

        <AnimatedImageContainer
          threshold={0.2}
          yValue={-10}
          className="grid-item "
        >
          <div className="project-photo project-photo-2 ">
            <div className="overlay">
              <h3>{t("project.heading")}</h3>
              <p>{t("project.description")}</p>
              <OrangeBtn onClick={() => {
              navigate("/ourProjects")
              }}>{t("project.buttonText")}&nbsp;&nbsp;→</OrangeBtn>
            </div>
            <img src={image2} alt="Project 2" loading="lazy" />
          </div>
        </AnimatedImageContainer>

        <AnimatedImageContainer
          threshold={0.2}
          yValue={-10}
          className="grid-item"
          onClick={() => handleImageClick(2)}
        >
          <div className="project-photo project-photo-3 ">
            <img src={image3} alt="Project 3" loading="lazy" />
          </div>
        </AnimatedImageContainer>

        <AnimatedImageContainer
          threshold={0.2}
          yValue={-10}
          className="grid-item grid-item-remove"
          onClick={() => handleImageClick(3)}
        >
          <div className="project-photo project-photo-4 ">
            <img src={image4} alt="Project 4" loading="lazy" />
          </div>
        </AnimatedImageContainer>

        <AnimatedImageContainer
          threshold={0.2}
          yValue={-10}
          className="grid-item grid-item-remove"
          onClick={() => handleImageClick(4)}
        >
          <div className="project-photo project-photo-5 ">
            <img src={image5} alt="Project 5" loading="lazy" />
          </div>
        </AnimatedImageContainer>
      </div>

      {selectedImage !== null ? (
        <ModalImage
          show={showModal}
          handleClose={handleCloseModal}
          images={[image1, image2, image3, image4, image5]}
          altText={`Project ${selectedImage + 1}`}
          initialSlide={selectedImage}
        />
      ) : undefined}
    </div>
  );
}

export default Projects;
