import CoverImageWithText from "./../../components/CoverImageWithText/CoverImageWithText";
import ProductForm from "../../components/ProductCollage/ProductCollage";
import coverImg from "./../../assets/pages/gantryCranes/gantryCover.webp";
import gantryCrane1 from "./../../assets/pages/gantryCranes/gantryCrane2.webp";
import gantryCrane2 from "./../../assets/pages/gantryCranes/gantryCrane3.webp";
import gantryCrane3 from "./../../assets/pages/gantryCranes/gantryCrane4.webp";
import gantryCrane4 from "./../../assets/pages/gantryCranes/gantryCrane5.webp";
import MainContainer from "../../components/MainContainer/MainContainer";
import InfoContainer from "../../components/MainContainer/InfoContainer/InfoContainer";
import ServiceCarousel from "./../../components/ServiceCarousel/Services";
import { PiCraneTowerFill, PiCraneFill } from "react-icons/pi";
import { MdBuild, MdConstruction } from "react-icons/md";
import { FaIndustry, FaWrench } from "react-icons/fa";
import BenefitsContainer from "../../components/BenefitsContainer/BenefitsContainer";

const icons = [
  PiCraneTowerFill,
  PiCraneFill,
  MdBuild,
  MdConstruction,
  FaIndustry,
  FaWrench,
];

const benefits = [
  "Increased efficiency through advanced automation",
  "Higher quality standards with meticulous quality control",
  "Sustainable practices minimizing environmental impact",
  "Cost-effective solutions tailored to client needs",
];

const hangingCraneItems = [
  {
    imgSrc: gantryCrane1,
    imgAlt: "Козловой кран 1",
    h1Text: "Козловой кран модель 1",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imgSrc: gantryCrane2,
    imgAlt: "Козловой кран 2",
    h1Text: "Козловой кран модель 2",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    imgSrc: gantryCrane3,
    imgAlt: "Козловой кран 3",
    h1Text: "Козловой кран модель 3",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    imgSrc: gantryCrane4,
    imgAlt: "Козловой кран 4",
    h1Text: "Козловой кран модель 4",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
];

const GantryCranes = () => {
  return (
    <div>
      <MainContainer>
        <CoverImageWithText
          imgSrc={coverImg}
          imgAlt="Gantry Crane cover image"
          h1Text="Gantry Cranes"
          h2Text="Home / Gantry Cranes"
        />

        <InfoContainer>
          <BenefitsContainer
            title="Характеристики продукции:"
            icons={icons}
            benefits={benefits}
          />
          <ProductForm items={hangingCraneItems} /> 
          <ServiceCarousel />
        </InfoContainer>
      </MainContainer>
    </div>
  );
};

export default GantryCranes;
