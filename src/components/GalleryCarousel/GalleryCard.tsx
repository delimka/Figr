import React, { useState, useRef, useEffect } from "react";
import Carousel from "react-multi-carousel";
import Modal from "react-modal";
import styles from "./GalleryCard.module.scss";
import "react-multi-carousel/lib/styles.css";
import { useNavBarVisibility } from "../../context/NavBarVisibilityContext";

interface Image {
  src: string;
  alt: string;
}

interface GalleryCardProps {
  title: string;
  description: string;
  images: Image[];
}

interface CarouselState {
  currentSlide: number;
  totalItems: number;
}

const GalleryCard: React.FC<GalleryCardProps> = ({
  title,
  description,
  images,
}) => {
  const carouselRef = useRef<Carousel>(null);
  const [carouselState, setCarouselState] = useState<CarouselState>({
    currentSlide: 0,
    totalItems: images.length,
  });
  const [isScrolling, setIsScrolling] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<
    "left" | "right" | null
  >(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const { setNavBarVisible } = useNavBarVisibility();

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      setNavBarVisible(false);
    } else {
      document.body.style.overflow = "auto";
      setNavBarVisible(true);
    }
    return () => {
      document.body.style.overflow = "auto";
      setNavBarVisible(true);
    };
  }, [isModalOpen, setNavBarVisible]);

  const openModal = (index: number) => {
    setNavBarVisible(false);
    setModalImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setNavBarVisible(true);
  };

  const nextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setModalImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    const nextSlide = carouselState.currentSlide + 1;
    if (nextSlide < carouselState.totalItems) {
      setIsScrolling(true);
      setScrollDirection("right");
      if (carouselRef.current) {
        carouselRef.current.goToSlide(nextSlide);
      }
    }
  };

  const previous = () => {
    const prevSlide = carouselState.currentSlide - 1;
    if (prevSlide >= 0) {
      setIsScrolling(true);
      setScrollDirection("left");
      if (carouselRef.current) {
        carouselRef.current.goToSlide(prevSlide);
      }
    }
  };

  const responsiveConfig = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1700 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 1700, min: 1069 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1069, min: 464 },
      items: 1,
    },
    wideMobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const beforeChange = () => {
    setIsScrolling(true);
  };

  const afterChange = (
    _: number,
    { currentSlide }: { currentSlide: number }
  ) => {
    setCarouselState({ ...carouselState, currentSlide });
    setIsScrolling(false);
    setScrollDirection(null);
  };

  function ButtonGroup({
    next,
    previous,
    carouselState,
  }: {
    next: () => void;
    previous: () => void;
    carouselState: CarouselState;
  }) {
    const { currentSlide, totalItems } = carouselState;

    const getVisibleItems = () => {
      const width = window.innerWidth;
      if (width >= 1700) return responsiveConfig.superLargeDesktop.items;
      else if (width >= 1024) return responsiveConfig.desktop.items;
      else if (width >= 464) return responsiveConfig.tablet.items;
      else return responsiveConfig.wideMobile.items;
    };

    const visibleItems = getVisibleItems();
    const isLastSlideVisible = currentSlide + visibleItems >= totalItems;

    return (
      <div className={styles.buttonContainer}>
        <div className={styles.buttonWrapper} onClick={previous}>
          <button
            className={`${styles.button1} ${
              currentSlide > 0 && !(isScrolling && scrollDirection === "right")
                ? ""
                : styles.hidden
            }`}
            onClick={previous}
          ></button>
        </div>
        <div className={styles.buttonWrapper}>
          <button
            className={`${styles.button2} ${
              isLastSlideVisible || (isScrolling && scrollDirection === "left")
                ? styles.hidden
                : ""
            }`}
            onClick={next}
          ></button>
        </div>
      </div>
    );
  }

  const handleImageClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.stopPropagation();
    const { clientX, currentTarget } = event;
    const { offsetWidth, offsetLeft } = currentTarget;
    const clickPositionX = clientX - offsetLeft;
    const width = window.innerWidth;
    const threshold = 0.15 * offsetWidth; // 15% of the image width

    if (clickPositionX > offsetWidth * (1 - 0.15) && width <= 464) {
      next();
    } else if (clickPositionX < threshold && width <= 464) {
      previous();
    } else {
      const index = parseInt(
        currentTarget.getAttribute("data-index") || "0",
        10
      );
      openModal(index);
    }
  };

  const handleArrowClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    actionFunction: () => void
  ) => {
    event.stopPropagation();
    actionFunction();
  };

  const handleModalImageClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const { clientX, currentTarget } = event;
    const { offsetWidth, offsetLeft } = currentTarget;
    const clickPositionX = clientX - offsetLeft;

    if (clickPositionX > offsetWidth * 0.5) {
      handleArrowClick(
        event as unknown as React.MouseEvent<HTMLButtonElement>,
        nextImage
      );
    } else {
      handleArrowClick(
        event as unknown as React.MouseEvent<HTMLButtonElement>,
        prevImage
      );
    }
  };

  return (
    <div className={styles.galleryContainer}>
      <h1>{title}</h1>
      <p className={styles.description}>{description}</p>
      <Carousel
        swipeable
        draggable
        showDots
        autoPlaySpeed={3500}
        ref={carouselRef}
        ssr={true}
        arrows={false}
        keyBoardControl
        customTransition="transform 300ms ease-in-out, opacity 300ms ease-in-out"
        transitionDuration={300}
        shouldResetAutoplay={true}
        responsive={responsiveConfig}
        rewindWithAnimation={true}
        beforeChange={beforeChange}
        afterChange={afterChange}
        containerClass={styles.carouselContainer}
        itemClass={styles.item}
        customButtonGroup={
          <ButtonGroup
            next={next}
            previous={previous}
            carouselState={carouselState}
          />
        }
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={styles.imageWrapper}
            data-index={index}
            onClick={handleImageClick}
          >
            <img src={image.src} alt={image.alt || `Slide ${index}`} />
          </div>
        ))}
      </Carousel>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className={styles.modal}
        overlayClassName={styles.overlay}
      >
        <div className={styles.modalContent} onClick={handleModalImageClick}>
          <button className={styles.closeButton} onClick={closeModal}>
            &times;
          </button>
          <div className={styles.modalButtonContainer}>
            <button
              className={styles.prevButton}
              onClick={(e) => handleArrowClick(e, prevImage)}
            >
              &larr;
            </button>
            <button
              className={styles.nextButton}
              onClick={(e) => handleArrowClick(e, nextImage)}
            >
              &rarr;
            </button>
          </div>

          <img
            className={styles.modalImage}
            src={images[modalImageIndex].src}
            alt={
              images[modalImageIndex].alt || `Modal Slide ${modalImageIndex}`
            }
            onClick={handleModalImageClick}
            data-index={modalImageIndex}
          />
        </div>
      </Modal>
    </div>
  );
};

export default GalleryCard;
