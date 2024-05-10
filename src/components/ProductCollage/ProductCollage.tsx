import React from "react";
import styles from "./ProductCollage.module.scss";

interface ProductCollageItem {
  imgSrc: string;
  imgAlt: string;
  h1Text?: string;
  pText?: string;
}

interface ProductCollageProps {
  items: ProductCollageItem[];
}

const ProductCollage: React.FC<ProductCollageProps> = ({ items }) => {
  const isSmallScreen = window.innerWidth <= 747;

  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {isSmallScreen ? (
            <>
              <div className={styles.imageBlock}>
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className={styles.itemImage}
                />
              </div>
              <div className={styles.textBlock}>
                {item.h1Text && <h1 className={styles.title}>{item.h1Text}</h1>}
                {item.pText && <p className={styles.paragraph}>{item.pText}</p>}
              </div>
            </>
          ) : index % 2 === 0 ? (
            <>
              <div>
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className={styles.itemImage}
                />
              </div>
              <div className={styles.textBlock}>
                {item.h1Text && <h1 className={styles.title}>{item.h1Text}</h1>}
                {item.pText && <p className={styles.paragraph}>{item.pText}</p>}
              </div>
            </>
          ) : (
            <>
              <div className={styles.textBlock}>
                {item.h1Text && <h1 className={styles.title}>{item.h1Text}</h1>}
                {item.pText && <p className={styles.paragraph}>{item.pText}</p>}
              </div>
              <div>
                <img
                  src={item.imgSrc}
                  alt={item.imgAlt}
                  className={styles.itemImage}
                />
              </div>
            </>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default ProductCollage;
