import CoverImageWithText from "./../../components/CoverImageWithText/CoverImageWithText";
import ProductForm from "../../components/ProductCollage/ProductCollage";
import overheadCover from "./../../assets/pages/overheadCranes/overheadCover.webp";
import overheadCrane1 from "./../../assets/pages/overheadCranes/overheadCrane1.webp";
import overheadCrane2 from "./../../assets/pages/overheadCranes/overheadCrane2.webp";
import overheadCrane3 from "./../../assets/pages/overheadCranes/overheadCrane3.webp";
import overheadCrane4 from "./../../assets/pages/overheadCranes/overheadCrane4.webp";
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
    imgSrc: overheadCrane1,
    imgAlt: "Навесной кран 1",
    h1Text: "Навесной кран модель 1",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    imgSrc: overheadCrane2,
    imgAlt: "Навесной кран 2",
    h1Text: "Навесной кран модель 2",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    imgSrc: overheadCrane3,
    imgAlt: "Навесной кран 3",
    h1Text: "Навесной кран модель 3",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    imgSrc: overheadCrane4,
    imgAlt: "Навесной кран 4",
    h1Text: "Навесной кран модель 4",
    pText:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book. ",
  },
];
const OverheadCranes = () => {
  return (
    <div>
      <MainContainer>
        <CoverImageWithText
          imgSrc={overheadCover}
          imgAlt="Overhead Crane cover image"
          h1Text="Overhead Cranes"
          h2Text="Home / Overhead Cranes"
        />

        <InfoContainer>
          <BenefitsContainer
            icons={icons}
            title="Характеристики продукции:"
            benefits={benefits}
          />
          <ProductForm items={hangingCraneItems} />
          <ServiceCarousel />
        </InfoContainer>
      </MainContainer>
    </div>
  );
};

export default OverheadCranes;
