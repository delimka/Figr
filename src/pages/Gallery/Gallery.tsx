import CoverImageWithText from "../../components/CoverImageWithText/CoverImageWithText";
import MainContainer from "../../components/MainContainer/MainContainer";
import GalleryCard from "../../components/GalleryCarousel/GalleryCard";
import galleryCover from "./../../assets/pages/gallery/galleryCover.webp";

import image1 from "./../../assets/pages/production/image1.webp";
import image2 from "./../../assets/pages/production/image2.webp";
import InfoContainer from "../../components/MainContainer/InfoContainer/InfoContainer";
import image3 from "./../../assets/pages/consoleCranes/consoleCrane1.webp";
import image4 from "./../../assets/pages/consoleCranes/consoleCrane2.webp";
import image5 from "./../../assets/pages/consoleCranes/consoleCrane3.webp";
import image6 from "./../../assets/pages/consoleCranes/consoleCrane4.webp";
import image9 from "./../../assets/pages/overheadCranes/overheadCrane1.webp";
import image10 from "./../../assets/pages/maintenance/maintenance1.webp";
import image14 from "./../../assets/pages/gantryCranes/gantryCrane5.webp";
import image15 from "./../../assets/pages/gantryCranes/gantryCrane3.webp";
import image16 from "./../../assets/pages/gantryCranes/gantryCrane2.webp";
import image17 from "./../../assets/pages/overheadCranes/overheadCrane3.webp";
// import image14 from "./../../assets/pages/consoleCranes/consoleCrane3.webp";
// import image15 from "./../../assets/pages/consoleCranes/consoleCrane4.webp";

const Gallery = () => {
  const images = [
    { src: image16, alt: "Image 1" },
    { src: image17, alt: "Image 2" },
    { src: image9, alt: "Image 3" },
    { src: image2, alt: "Image 4" },
    { src: image1, alt: "Image 5" },
    { src: image10, alt: "Image 6" },
    { src: image14, alt: "Image 7" },
    { src: image15, alt: "Image 8" },
  ];

  const images2 = [
    { src: image3, alt: "Image 1" },
    { src: image4, alt: "Image 2" },
    { src: image5, alt: "Image 3" },
    { src: image6, alt: "Image 4" },
    { src: image3, alt: "Image 5" },
    { src: image4, alt: "Image 6" },
    { src: image5, alt: "Image 7" },
    { src: image6, alt: "Image 8" },
  ];

  return (
    <MainContainer>
      <CoverImageWithText
        imgSrc={galleryCover}
        imgAlt="Gallery Cover Image"
        h1Text="Gallery"
        h2Text="Home / Gallery"
      ></CoverImageWithText>
      <InfoContainer>
        <GalleryCard
          title="Project Title"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book."
          images={images}
        />
        <GalleryCard
          title="Another Project Title"
          description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknownprinter took a galley of type and scrambled it to make a type specimen book."
          images={images2}
        />
      </InfoContainer>
    </MainContainer>
  );
};

export default Gallery;
