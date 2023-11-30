import  { useState } from "react";
import { useTranslation } from 'react-i18next'; 
import "./CompanyInfo.scss";
import ResizeHandler from "../../helpers/hooks/ResizeHandler";
import AnimatedImageContainer from "../../helpers/hooks/AnimatedImageContainer";
import icon1 from "./../../assets/info-icons/Saw.svg";
import icon2 from "./../../assets/info-icons/Shape.svg";
import icon3 from "./../../assets/info-icons/Ruler.svg";

const CompanyInfo = () => {
  const startYear = 2006;
  const currentYear = new Date().getFullYear();
  const yearsInBusiness = currentYear - startYear + "+";
  const completedProjects = '999+';

  
  const { t } = useTranslation();

  // Mock data for completed projects and main activities
  
  const yearsInBusinessText = t('companyInfo.yearsInBusiness');
  const completedProjectsText = t('companyInfo.completedProjects');

  interface ActivityType  {
    title: string;
    description: string;
    icon: string; 
  }

  const mainActivities: ActivityType[] = [
    {
      title: t('quoteForm.sideInfo.0.title'),
      description: t('companyInfo.activities.0.description'),
      icon: icon1,
    },
    {
      title: t('companyInfo.activities.1.title'),
      description: t('companyInfo.activities.1.description'),
      icon: icon2,
    },
    {
      title: t('companyInfo.activities.2.title'),
      description: t('companyInfo.activities.2.description'),
      icon: icon3,
    },
  ];
  const mainHeading = t('companyInfo.mainHeading');
  // Motion
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Determine whether to animate along the x-axis or y-axis depending on screen size
  const animateX = windowWidth > 1120;
  const animateY = windowWidth <= 1120;
 
  return (
    <div className="company-info">
      <ResizeHandler setWindowWidth={setWindowWidth} />
      <AnimatedImageContainer
        threshold={0.2}
        initialX={animateX ? -60 : 0}
        initialY={animateY ? 0 : 0}
        className="info-boxes-container"
        animateX={animateX}
        animateY={animateY}
      >
        <div className="info-box-projects">
          <span className="info-span">{completedProjects}</span>
          <h4 className="info-heading-4">{completedProjectsText}</h4>
        </div>

        <div className="info-box-activity">
          <span className="info-span">{yearsInBusiness}</span>
          <h4 className="info-heading-4">{yearsInBusinessText}</h4>
        </div>
      </AnimatedImageContainer>

      <AnimatedImageContainer
        className="outer-container"
        threshold={0.2}
        initialX={animateX ? 60 : 0}
        initialY={animateY ? 20 : 0}
        animateX={animateX}
        animateY={animateY}
      >
        <div className="main-activity-box">
          <h2 className="main-heading-2">
          {mainHeading}
          </h2>
          <ul>
          {mainActivities.map((activity: ActivityType, index: number) => (
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
    </div>
  );
};

export default CompanyInfo;
