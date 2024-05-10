import React, { RefObject, createRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProjectCard from "./ProjectCard";
import styles from "./CarouselContainer.module.scss";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

interface CarouselState {
  currentSlide: number;
  totalItems: number;
}

interface ButtonGroupProps {
  next: () => void;
  previous: () => void;
  goToSlide?: (index: number) => void;
  carouselState: CarouselState;
}

interface Project {
  id: number;
  topImage: string;
  middleText: string;
  bottomImages: string[];
  title: string;
  description: string;
  subHeading: string;
  listItems: string[];
  socialLinks: SocialLink[];
}

interface SocialLink {
  icon: JSX.Element;
  url: string;
}
interface CarouselContainerProps {
  projects: Project[];
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({ projects }) => {
  const carouselRef: RefObject<Carousel> = createRef();

  const [carouselState, setCarouselState] = useState<CarouselState>({
    currentSlide: 0,
    totalItems: projects.length,
  });

  const updateState = (newState: CarouselState) => {
    setCarouselState(newState);
  };

  const next = () => {
    if (carouselRef.current) {
      const nextSlide = carouselState.currentSlide + 1;
      carouselRef.current.goToSlide(nextSlide);
      updateState({ ...carouselState, currentSlide: nextSlide });
    }
  };

  const previous = () => {
    if (carouselRef.current) {
      const prevSlide = carouselState.currentSlide - 1;
      carouselRef.current.goToSlide(prevSlide);
      updateState({ ...carouselState, currentSlide: prevSlide });
    }
  };

  const responsiveConfig = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1700 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const ButtonGroup = ({ next, previous, carouselState }: ButtonGroupProps) => {
    const { currentSlide, totalItems } = carouselState;

    return (
      <div className={styles.grid}>
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.button} ${styles.buttonLeft} ${
              currentSlide > 0 ? "" : styles.hidden
            }`}
            onClick={previous}
          >
            <span>Previous</span>
            <FaArrowLeft />
          </button>
          <button
            className={`${styles.button} ${styles.buttonRight} ${
              currentSlide < totalItems - 1 ? "" : styles.hidden
            }`}
            onClick={next}
          >
            <span>Next</span>

            <FaArrowRight />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={styles.ProductsContainer}>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={false}
        ssr={false}
        arrows={false}
        keyBoardControl={true}
        ref={carouselRef}
        customTransition="transform 300ms ease-in-out, opacity 300ms ease-in-out"
        transitionDuration={300}
        customButtonGroup={
          <ButtonGroup
            next={next}
            previous={previous}
            carouselState={carouselState}
          />
        }
        renderButtonGroupOutside={true}
        responsive={responsiveConfig}
        containerClass={styles.carouselContainer}
        itemClass={styles.item}
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
