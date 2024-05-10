import { ReactNode } from 'react';
import styles from './InfoContainer.module.scss'; 

interface InfoContainerProps {
    children?: ReactNode;
    className?: string;
}
const InfoContainer = ({ children, className }: InfoContainerProps) => {
  const containerClasses = `${styles.infoContainer} ${className || ''}`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default InfoContainer;