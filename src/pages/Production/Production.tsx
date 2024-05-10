import CoverImageWithText from "./../../components/CoverImageWithText/CoverImageWithText";
import production from "./../../assets/pages/production/production.webp";
import image1 from "./../../assets/pages/production/image1.webp";
import image2 from "./../../assets/pages/production/image2.webp";
import image3 from "./../../assets/pages/production/image3.webp";
import ServiceCollage from "../../components/ServiceCollage/ServiceCollage";
import ServicesMainContainer from "./../../components/ServicesMainSection/ServicesMainSection";
import ServiceCarousel from "./../../components/ServiceCarousel/Services";
import MainContainer from "../../components/MainContainer/MainContainer";
import InfoContainer from "../../components/MainContainer/InfoContainer/InfoContainer";
import { GiIBeam } from "react-icons/gi";
import { GiCrane, GiGearHammer, GiHook } from "react-icons/gi";
import { FaTools, FaHardHat } from "react-icons/fa";
import BenefitsContainer from "../../components/BenefitsContainer/BenefitsContainer";

const icons = [GiIBeam, GiCrane, GiGearHammer, GiHook, FaTools, FaHardHat];
const benefits = [
  "Increased efficiency through advanced automation",
  "Higher quality standards with meticulous quality control",
  "Sustainable practices minimizing environmental impact",
  "Cost-effective solutions tailored to client needs",
];

const Production = () => {
  return (
    <MainContainer>
      <CoverImageWithText
        imgSrc={production}
        imgAlt="Production Cover Image"
        h1Text="Production"
        h2Text="Home / Production"
      />
      <InfoContainer>
        <ServiceCollage
          imgSrc1={image1}
          imgSrc2={image2}
          imgSrc3={image3}
          imgAlt1="Ssasa"
          imgAlt2="sasa"
          imgAlt3="sasa"
        />
        <BenefitsContainer
          icons={icons}
          benefits={benefits}
          title="Характеристики продукции:"
        />
        <ServicesMainContainer
          mainTitle="Production Techniques"
          mainParagraph="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
          subHeading="Why Choose Us?"
          subParagraph="We provide state-of-the-art
        machinery and innovative processes that enhance productivity and
        quality."
        />
        <ServiceCarousel />
      </InfoContainer>
    </MainContainer>
  );
};

export default Production;
