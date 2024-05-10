import { useTranslation } from "react-i18next";
import LinesEllipsis from "react-lines-ellipsis";
import { Element } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import image0 from "./../../assets/pages/production/image3.webp";
import image1 from "./../../assets/services/image-installation.webp";
import image2 from "./../../assets/services/image-production.webp";
import image3 from "./../../assets/services/image-surfacecoating.webp";
import { useNavigate } from "react-router-dom";
import "./Services.scss";

const Services = () => {
  const { t } = useTranslation();
const navigate = useNavigate();



  return (
    <Element name="services" className="services-container">
      <div className="image-container big">
        <img src={image0} alt="Crane Services Overview" loading="lazy" />
      </div>

      <div className="image-container small" onClick={() => navigate(`/maintenance`)}>
        <img src={image3} alt="Maintenance Service" loading="lazy" />
        <div className="overlay-content prpl">
          <h2>{t("services.maintenance.heading")}</h2>
          <LinesEllipsis
            text={t("services.maintenance.description")}
            maxLine="4"
            ellipsis=" . . ."
            trimRight
            basedOn="words"
            className="service-p"
          />
          <div className="services-button btn2">
            <button aria-label={t("services.buttonAriaLabel")}>
              <FontAwesomeIcon icon={faArrowRight} beat />
            </button>
          </div>
        </div>
      </div>

      <div className="image-container small"  onClick={() => navigate(`/production`)}>
        <img src={image2} alt="Production Service" loading="lazy" />
        <div className="overlay-content orng">
          <h2>{t("services.production.heading")}</h2>
          <LinesEllipsis
            text={t("services.production.description")}
            maxLine="4"
            ellipsis=" . . ."
            trimRight
            basedOn="letters"
            className="service-p"
          />
          <div className="services-button btn3">
            <button aria-label={t("services.buttonAriaLabel")}>
              <FontAwesomeIcon icon={faArrowRight} beat />
            </button>
          </div>
        </div>
      </div>

      <div className="image-container small"  onClick={() => navigate(`/installation`)}>
        <img src={image1} alt="Installation Service" loading="lazy" />
        <div className="overlay-content prpl">
          <h2>{t("services.installation.heading")}</h2>
          <LinesEllipsis
            text={t("services.installation.description")}
            maxLine="4"
            ellipsis=" . . ."
            trimRight
            basedOn="letters"
            className="service-p"
          />
          <div className="services-button btn2">
            <button aria-label={t("services.buttonAriaLabel")}>
              <FontAwesomeIcon icon={faArrowRight} beat />
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;
