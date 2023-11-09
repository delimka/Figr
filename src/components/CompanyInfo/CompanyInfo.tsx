import  { useState } from "react";
import "./CompanyInfo.scss";
import ResizeHandler from "../../helpers/hooks/ResizeHandler";
import AnimatedImageContainer from "../../helpers/hooks/AnimatedImageContainer";
import icon1 from "./../../assets/info-icons/Saw.svg";
import icon2 from "./../../assets/info-icons/Shape.svg";
import icon3 from "./../../assets/info-icons/Ruler.svg";

const CompanyInfo = () => {
  // Calculate the number of years in business
  const startYear = 2006;
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - startYear + "+";

  // Mock data for completed projects and main activities
  const completedProjects = 1200;
  const mainActivities = [
    {
      title: "Construction and Installation",
      description:
        "Expert construction and installation of robust cranes for demanding environments.",
      icon: icon1,
    },
    {
      title: "Crane Maintenance and Repair",
      description:
        "Comprehensive services for crane upkeep, ensuring reliability and longevity.",
      icon: icon2,
    },
    {
      title: "Surface Coating and Refurbishment",
      description:
        "High-quality surface coating and refurbishment for crane preservation.",
      icon: icon3,
    },
  ];

  // Motion
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Determine whether to animate along the x-axis or y-axis depending on screen size
  const animateX = windowWidth > 1120;
  const animateY = windowWidth <= 1120;

  return (
    <section className="company-info">
      <ResizeHandler setWindowWidth={setWindowWidth} />
      <AnimatedImageContainer
        threshold={0.2}
        initialX={animateX ? -60 : 0}
        initialY={animateY ? 60 : 0}
        className="info-boxes-container"
        animateX={animateX}
        animateY={animateY}
      >
        <div className="info-box-projects">
          <span className="info-span">{completedProjects}</span>
          <h4 className="info-heading-4">Completed Projects</h4>
        </div>

        <div className="info-box-activity">
          <span className="info-span">{yearsInBusiness}</span>
          <h4 className="info-heading-4">Years in Business</h4>
        </div>
      </AnimatedImageContainer>

      <AnimatedImageContainer
        className="outer-container"
        threshold={0.2}
        initialX={animateX ? 60 : 0}
        initialY={animateY ? 60 : 0}
        animateX={animateX}
        animateY={animateY}
      >
        <div className="main-activity-box">
          <h2 className="main-heading-2">
            We Construct and Manage Places and Infrastructures{" "}
          </h2>
          <ul>
            {mainActivities.map((activity, index) => (
              <li key={index} className="activity-item">
                <div className="icon-container">
                  <img
                    src={activity.icon}
                    alt={activity.title}
                    className="instrument-icons"
                  />
                </div>
                <div className="activity-info">
                  <h5 className="sub-heading-5">{activity.title}</h5>
                  <p className="description-p">{activity.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </AnimatedImageContainer>
    </section>
  );
};

export default CompanyInfo;
