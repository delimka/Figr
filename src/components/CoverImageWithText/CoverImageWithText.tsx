import React from "react";
import styles from "./CoverImageWithText.module.scss";

interface CoverImageWithTextProps {
  imgSrc?: string;
  imgAlt?: string;
  h1Text?: string;
  h2Text?: string;
  className?: string;
}

const CoverImageWithText: React.FC<CoverImageWithTextProps> = ({
  imgSrc,
  imgAlt = "",
  h1Text,
  h2Text = "",
  className = ""
}) => {
  return (
    <div className={`${styles.coverContainer}  ${className}`}>
      <img src={imgSrc} className={styles.coverImage} alt={imgAlt} />
      <div className={`${styles.topicContainer } ${className}`}>
        <h1 className={`${styles.textOverlay} ${styles.h1} `}>{h1Text}</h1>
        <h2 className={`${styles.textOverlay} ${styles.h2}`}>{h2Text}</h2>
      </div>
    </div>
  );
};

export default CoverImageWithText;
