import { ReactNode } from 'react';
import styles from './MainContainer.module.scss'; // Стили для контейнера

interface MainContainerProps {
    children?: ReactNode;
    className?: string;
}
const MainContainer = ({ children, className }: MainContainerProps) => {
  const containerClasses = `${styles.mainContainer} ${className || ''}`;

  return (
    <div className={containerClasses}>
      {children}
    </div>
  );
};

export default MainContainer;