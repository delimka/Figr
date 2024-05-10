import CoverImageWithText from "./../../components/CoverImageWithText/CoverImageWithText";
import ProductForm from "../../components/ProductCollage/ProductCollage";
import coverImg from "./../../assets/pages/consoleCranes/coverImage.webp";
import consoleCrane1 from "./../../assets/pages/consoleCranes/consoleCrane1.webp";
import consoleCrane2 from "./../../assets/pages/consoleCranes/consoleCrane2.webp";
import consoleCrane3 from "./../../assets/pages/consoleCranes/consoleCrane3.webp";
import consoleCrane4 from "./../../assets/pages/consoleCranes/consoleCrane4.webp";
import MainContainer from "../../components/MainContainer/MainContainer";
import InfoContainer from "../../components/MainContainer/InfoContainer/InfoContainer";
import ServiceCarousel from "./../../components/ServiceCarousel/Services";
import { PiCraneTowerFill, PiCraneFill } from "react-icons/pi";
import { MdBuild, MdConstruction } from "react-icons/md";
import { FaIndustry, FaWrench } from "react-icons/fa";
import BenefitsContainer from "../../components/BenefitsContainer/BenefitsContainer";

const benefits = [
  "Increased efficiency through advanced automation",
  "Higher quality standards with meticulous quality control",
  "Sustainable practices minimizing environmental impact",
  "Cost-effective solutions tailored to client needs",
];

const icons = [PiCraneTowerFill, PiCraneFill, MdBuild, FaWrench, FaIndustry, MdConstruction];

const hangingCraneItems = [
  {
    imgSrc: consoleCrane1,
    imgAlt: "Консольный кран 1",
    h1Text: "Консольный кран модель 1",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imgSrc: consoleCrane2,
    imgAlt: "Консольный кран 2",
    h1Text: "Консольный кран модель 2",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    imgSrc: consoleCrane3,
    imgAlt: "Консольный кран 3",
    h1Text: "Консольный кран модель 3",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    imgSrc: consoleCrane4,
    imgAlt: "Консольный кран 4",
    h1Text: "Консольный кран модель 4",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
];
const ConsoleCranes = () => {
  return (
    <div>
      <MainContainer>
        <CoverImageWithText
          imgSrc={coverImg}
          imgAlt="Console Crane cover image"
          h1Text="Console Cranes"
          h2Text="Home / Console Cranes"
        />

        <InfoContainer>
          <BenefitsContainer
            title="Характеристики продукции:"
            benefits={benefits}
            icons={icons}
          />
          
          <ProductForm items={hangingCraneItems} />
          <ServiceCarousel />
        </InfoContainer>
      </MainContainer>
    </div>
  );
};

export default ConsoleCranes;
