import installation from "./../../assets/pages/installation/installation.webp";
import image1 from "./../../assets/pages/installation/image1.webp";
import image2 from "./../../assets/pages/installation/image2.webp";
import image3 from "./../../assets/pages/installation/image3.webp";
import CoverImageWithText from "./../../components/CoverImageWithText/CoverImageWithText";
import ServiceCarousel from "../../components/ServiceCarousel/Services";
import ServiceCollage from "../../components/ServiceCollage/ServiceCollage";
import ServicesMainSection from "../../components/ServicesMainSection/ServicesMainSection";
import styles from "./Installation.module.scss";
import InfoContainer from "../../components/MainContainer/InfoContainer/InfoContainer";
import MainContainer from "../../components/MainContainer/MainContainer";

export default function Installation() {

  return (
    <MainContainer>
      <CoverImageWithText
        imgSrc={installation}
        imgAlt="Installation Cover Image"
        h1Text="Installation"
        h2Text="Home / Installation"
      />
      <InfoContainer>
        <ServiceCollage
          imgSrc1={image1}
          imgSrc2={image2}
          imgSrc3={image3}
          imgAlt1={installation}
          imgAlt2={installation}
          imgAlt3={installation}
        />
        <ServicesMainSection
          mainTitle="Installation as Service"
          mainParagraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          subHeading="Get a appointment with our Expert"
          subParagraph="Cras tincidunt tellus at mi tristique rhoncus. Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis."
        />
        <div className={`${styles.otherServices}`}>
          <div>
            <ServiceCarousel />
          </div>
        </div>
      </InfoContainer>
    </MainContainer>
  );
}
