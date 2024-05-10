import React from "react";
import styles from "./ServiceCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate} from "react-router-dom";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

interface ServiceCardProps {
  intro: string;
  title: string;
  readMore: string;
  isActive: boolean;
  slug:string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  intro,
  title,
  readMore,
  isActive,
  slug
}) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${slug}`); 
  };

  return (
    <div
      className={
        isActive
          ? `${styles.cardContainer} ${styles.active}`
          : styles.cardContainer
      }
      onClick={handleClick}
    >
      <p className={styles.intro}>{intro}</p>
      <span className={styles.title}>{title}</span>
      <div className={styles.readMoreContainer}>
        <span className={styles.readMore}>{readMore}</span>
        <FontAwesomeIcon icon={faArrowRight} />
      </div>
    </div>
  );
};

export default ServiceCard;
