
import { Element } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import image0 from "./../../assets/services/image0.jpg";
import image1 from "./../../assets/services/image-installation.jpg";
import image2 from "./../../assets/services/image-production.jpg";
import image3 from "./../../assets/services/image-surfacecoating.jpg";
import "./Services.scss";


const Services = () => {
  return (
    <Element name="services" className="services-container">
      <div  className="image-container big">
        <img src={image0} alt="Crane Services Overview" />
      </div>

      <div className="image-container small">
        <img src={image3} alt="Maintenance Service" />
        <div className="overlay-content prpl">
          <h2>Maintenance</h2>
          <p>
            With a focus on quality, we provide expert repairs and professional surface coating for cranes, enhancing their durability and extending their lifespan.
          </p>
          <div className="services-button btn2">
            <button>
              <FontAwesomeIcon icon={faArrowRight} beat />
            </button>
          </div>
        </div>
      </div>

      <div className="image-container small">
        <img src={image2} alt="Production Service" />
        <div className="overlay-content orng">
          <h2>Production</h2>
          <p>
            From comprehensive maintenance to meticulous assembly, our services cover every aspect of crane production, guaranteeing top-notch performance and safety.
          </p>
          <div className="services-button btn3">
            <button>
              <FontAwesomeIcon icon={faArrowRight} beat />
            </button>
          </div>
        </div>
      </div>

      <div className="image-container small">
        <img src={image1} alt="Installation Service" />
        <div className="overlay-content prpl">
          <h2>Installation</h2>
          <p>
            Our expert team specializes in precise crane installation, ensuring seamless integration and optimal functionality for your operations.
          </p>
          <div className="services-button btn2">
            <button>
              <FontAwesomeIcon icon={faArrowRight} beat />
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Services;