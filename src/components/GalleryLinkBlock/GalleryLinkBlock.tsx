import React from "react";
import styles from "./GalleryLinkBlock.module.scss";
import OrangeBtn from "../OrangeBtn/OrangeBtn";
import { Link } from "react-router-dom";

interface GalleryLinkBlockProps {
  img1: string;
  img2: string;
  img3: string;
}

const GalleryLinkBlock: React.FC<GalleryLinkBlockProps> = ({
  img1,
  img2,
  img3,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={img1} alt="Description of image 1" />
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={img2} alt="Description of image 2" />
        <div className={styles.overlay}>
          <h1>Галерея</h1>
          <span>Фотогалерея наших проектов</span>
          <Link to="/gallery">
            <OrangeBtn >
              <span>Смотреть</span>
            </OrangeBtn>
          </Link>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img className={styles.image} src={img3} alt="Description of image 3" />
      </div>
    </div>
  );
};

export default GalleryLinkBlock;
