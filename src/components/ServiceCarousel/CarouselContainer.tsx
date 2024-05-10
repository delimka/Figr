import React, { useEffect, RefObject, createRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ServiceCard from "./ServiceCard";
import styles from "./CarouselContainer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowCircleRight,
  faArrowCircleLeft,
} from "@fortawesome/free-solid-svg-icons";

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

interface Service {
  id: number;
  intro: string;
  title: string;
  readMore: string;
  slug: string;
}

interface CarouselContainerProps {
  services: Service[];
  activeServiceId: number | undefined;
}

const CarouselContainer: React.FC<CarouselContainerProps> = ({
  services,
  activeServiceId,
}) => {
  const carouselRef: RefObject<Carousel> = createRef();

  const [carouselState, setCarouselState] = useState<CarouselState>({
    currentSlide: 0,
    totalItems: services.length,
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

  useEffect(() => {
    const index = services.findIndex(
      (service) => service.id === activeServiceId
    );
    if (index !== -1 && carouselRef.current) {
      if (window.innerWidth <= 920) {
        carouselRef.current.goToSlide(index);
      } else {
        carouselRef.current.goToSlide(index === 0 ? index : index - 1);
      }
    }
  }, [activeServiceId, services]);

  const responsiveConfig = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1700 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1335 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1335, min: 730 },
      items: 2,
    },
    wideMobile: {
      breakpoint: { max: 730, min: 550 },
      items: 1,
      partialVisibilityGutter: 130,
    },
    mobile: {
      breakpoint: { max: 550, min: 0 },
      items: 1,
      partialVisibilityGutter: 60,
    },
  };
  const ButtonGroup = ({ next, previous, carouselState }: ButtonGroupProps) => {
    const { currentSlide } = carouselState;

    return (
      <div className={styles.buttonContainer}>
        <button
          className={`${styles.button} ${
            currentSlide > 0 ? "" : styles.hidden
          }`}
          onClick={previous}
        >
          <FontAwesomeIcon
            icon={faArrowCircleLeft}
            size={"2x"}
            color="#f4983c"
          />
        </button>
        <button className={styles.button} onClick={next}>
          <FontAwesomeIcon
            icon={faArrowCircleRight}
            size={"2x"}
            color="#f4983c"
          />
        </button>
      </div>
    );
  };

  return (
    <div className={styles.otherServicesContainer}>
      <h2>Other Services</h2>
      <Carousel
        swipeable={true}
        draggable={true}
        showDots={true}
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
        removeArrowOnDeviceType={["mobile"]}
        responsive={responsiveConfig}
        containerClass={styles.carouselContainer}
        itemClass={styles.item}
        partialVisible={true}
        //   sliderClass={styles.carouselTrack}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            {...service}
            isActive={service.id === activeServiceId}
            slug={service.slug}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
