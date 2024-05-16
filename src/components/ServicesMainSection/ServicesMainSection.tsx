import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import styles from "./ServicesMainSection.module.scss";

interface ServiceInfoProps {
  mainTitle: string;
  mainParagraph: string;
  subHeading: string;
  subParagraph: string;
  onButtonClick?: () => void;
}

const ServiceInfo = ({
  mainTitle,
  mainParagraph,
  subHeading,
  subParagraph,
  onButtonClick,
}: ServiceInfoProps) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onButtonClick) {
      onButtonClick();
    } else {
      navigate("/contact");
    }
  };

  return (
    <div>
      <h2 className={styles.mainHeading}>{mainTitle}</h2>
      <div className={styles.mainInfo}>
        <div className={styles.extraInfo}>
          <h1 className={styles.extraInfoHeading}>{subHeading}</h1>
          <p>{subParagraph}</p>
          <div>
            <button
              className={`${styles.servicesButton} ${styles.btn1}`}
              onClick={handleButtonClick}
            >
              <FontAwesomeIcon icon={faArrowRight} beat />
            </button>
          </div>
        </div>
        <p className={styles.mainParagraph}>{mainParagraph}</p>
      </div>
    </div>
  );
};

export default ServiceInfo;
