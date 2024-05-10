import React from 'react';
import { IconType } from 'react-icons'; // Используется для типизации иконок
import styles from './BeneftisContainer.module.scss';

interface BenefitsWithIconsProps {
  title: string;
  benefits: string[];
  icons: IconType[];
}

const BenefitsContainer: React.FC<BenefitsWithIconsProps> = ({ title, benefits, icons }) => {
  return (
    <div className={styles.benefitContainer}>
      <div className={styles.bulletContainer}>
        <h3>{title}</h3>
        <ul>
          {benefits.map((benefit, index) => (
            <li key={index}>{benefit}</li>
          ))}
        </ul>
      </div>
      <div className={styles.iconContainer}>
        {icons.map((Icon, index) => (
          <Icon key={index} size={65} color="white" />
        ))}
      </div>
    </div>
  );
};

export default BenefitsContainer;