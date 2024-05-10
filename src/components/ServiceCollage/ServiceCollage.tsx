import styles from './ServiceCollage.module.scss';
import React from 'react';

interface ServiceCollageProps {
  imgSrc1: string;
  imgSrc2: string;
  imgSrc3: string;
  imgAlt1: string;
  imgAlt2: string;
  imgAlt3: string;
}
const  ServiceCollage : React.FC<ServiceCollageProps> = ({
imgSrc1,
imgSrc2,
imgSrc3,
imgAlt1,
imgAlt2,
imgAlt3
}) => {
  return (
    <div className={styles.collage}>
      <img className={styles.collageImg} src={imgSrc1} alt={imgAlt1} />
      <img className={styles.collageImg} src={imgSrc2} alt={imgAlt2} />
      <img className={styles.collageImg} src={imgSrc3} alt={imgAlt3} />
    </div>
  );
}

export default ServiceCollage;
