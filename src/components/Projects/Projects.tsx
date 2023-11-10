import { useState } from "react";
import "./Projects.scss";
import AnimatedImageContainer from "../../helpers/hooks/AnimatedImageContainer";
import ModalImage from "../../helpers/hooks/ModalImage";
import OrangeBtn from "./../OrangeBtn/OrangeBtn";
import image1 from "./../../assets/projects/project1.jpg";
import image2 from "./../../assets/projects/project2.jpg";
import image3 from "./../../assets/projects/project3.jpg";
import image4 from "./../../assets/projects/project4.jpg";
import image5 from "./../../assets/projects/project5.jpg";

function Projects() {
  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
    <section className="projects-container">
      <h2>Our works</h2>
      <h1>Our special projects</h1>
      <div className="grid-container">
        <AnimatedImageContainer
          threshold={0.2}
          yValue={20}
          className="grid-item double-row"
          onClick={() => handleImageClick(0)}
        >
          <div className="project-photo project-photo-1">
            <img src={image1} alt="Project 1" />
          </div>
        </AnimatedImageContainer>

        <AnimatedImageContainer
          threshold={0.2}
          yValue={20}
          className="grid-item "
        >
          <div className="project-photo project-photo-2 ">
            <div className="overlay">
              <h3>Project 2</h3>
              <p>Project Description</p>
              <OrangeBtn>Learn more&nbsp;&nbsp;→</OrangeBtn>
            </div>
            <img src={image2} alt="Project 2" />
          </div>
        </AnimatedImageContainer>

        <AnimatedImageContainer
          threshold={0.2}
          yValue={20}
          className="grid-item"
          onClick={() => handleImageClick(2)}
        >
          <div className="project-photo project-photo-3 ">
            <img src={image3} alt="Project 3" />
          </div>
        </AnimatedImageContainer>

        <AnimatedImageContainer
          threshold={0.2}
          yValue={20}
          className="grid-item grid-item-remove"
          onClick={() => handleImageClick(3)}
        >
          <div className="project-photo project-photo-4 ">
            <img src={image4} alt="Project 4" />
          </div>
        </AnimatedImageContainer>

        <AnimatedImageContainer
          threshold={0.2}
          yValue={20}
          className="grid-item grid-item-remove"
          onClick={() => handleImageClick(4)}
        >
          <div className="project-photo project-photo-5 ">
            <img src={image5} alt="Project 5" />
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
      ) : null}
    </section>
  );
}

export default Projects;
