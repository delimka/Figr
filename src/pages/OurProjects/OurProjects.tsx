import MainContainer from "../../components/MainContainer/MainContainer";
import CoverImageWithText from "../../components/CoverImageWithText/CoverImageWithText";
import InfoContainer from "../../components/MainContainer/InfoContainer/InfoContainer";
import styles from "./OurProjects.module.scss";
import OurProjectsCarousel from "./../../components/OurProjectsCarousel/OurProjects";
import GalleryLinkBlock from "../../components/GalleryLinkBlock/GalleryLinkBlock";
import coverImage from "./../../assets/ourProjects/ourProjectsCover.webp";
import img2 from "./../../assets/ourProjects/project1.webp";
import img1 from "./../../assets/pages/consoleCranes/consoleCrane2.webp";
import img3 from "./../../assets/pages/overheadCranes/overheadCrane3.webp";

const OurProjects = () => {
  return (
    <MainContainer>
      <CoverImageWithText
        imgSrc={coverImage}
        imgAlt="Projects page Cover Image"
        h1Text="Our Projects"
        h2Text="Home / Our Projects"
      />
      <InfoContainer className={styles.infoContainer}>
        <OurProjectsCarousel />
        <GalleryLinkBlock img1={img1} img2={img2} img3={img3} />
      </InfoContainer>
    </MainContainer>
  );
};

export default OurProjects;
