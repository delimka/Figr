import React from "react";
import styles from "./ProjectCard.module.scss";

interface SocialLink {
    icon: JSX.Element;
    url: string;
}

interface ProjectCardProps {
  id: number;
  topImage: string;
  middleText: string;
  bottomImages: string[];
  title: string;
  description: string;
  subHeading: string;
  listItems: string[];
  socialLinks: SocialLink[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    topImage,
    middleText,
    bottomImages,
    title,
    description,
    subHeading,
    listItems,
    socialLinks,
  }) => {
    return (
      <div className={styles.cardContainer}>
        <div className={styles.leftTop} style={{ backgroundImage: `url(${topImage})` }}></div>
        <div className={styles.leftMiddle}>
          <p>{middleText}</p>
        </div>
        <div className={styles.leftBottom}>
          {bottomImages.map((image, index) => (
            <div key={index} style={{ background: `url(${image}) no-repeat center center`, backgroundSize: "cover" }}></div>
          ))}
        </div>
        <div className={styles.rightColumn}>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className={styles.overviewIconsContainer}>
            <div>
              <h2>{subHeading}</h2>
              <ul style={{ margin: "0", padding: "0" }}>
                {listItems.map((item, index) => <li key={index}>{item}</li>)}
              </ul>
            </div>
            <div className={styles.socialIcons}>
              {socialLinks.map((link, index) => (
                <a key={index} href={link.url} className={styles.iconLink} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;