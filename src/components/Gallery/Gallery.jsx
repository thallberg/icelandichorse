import React, { useState } from "react";
import styles from "./Gallery.module.css";
import { useInView } from "react-intersection-observer";

const Gallery = () => {
  const [inView, setInView] = useState(false);

  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // När den triggas första gången stannar den där
    threshold: 0.5, // För att trigga när 80% av About är synlig
  });

  React.useEffect(() => {
    if (isInView) {
      setInView(true); // Sätt inView till true när About-sektionen är synlig
    }
  }, [isInView]);

  return (
    <section
      className={`${styles.container} ${inView ? styles.animate : ""}`}
      id="gallery"
      ref={ref}
      
      >
      <h2 className={styles.title}>Gallery</h2>
      <div className={styles.grid}>
        <div className={styles.gridItem}>
          <img
            src="./gallery/horse1.webp"
            alt="Gallery Image 1"
            className={styles.image}
          />
        </div>
        <div className={styles.gridItem}>
          <img
            src="./gallery/horse2.webp"
            alt="Gallery Image 2"
            className={styles.image}
          />
        </div>
        <div className={styles.gridItem}>
          <img
            src="./gallery/horse3.webp"
            alt="Gallery Image 3"
            className={styles.image}
          />
        </div>
        <div className={styles.gridItem}>
          <img
            src="./gallery/horse5.webp"
            alt="Gallery Image 5"
            className={styles.image}
          />
        </div>
        <div className={styles.gridItem}>
          <img
            src="./gallery/horse6.webp"
            alt="Gallery Image 6"
            className={styles.image}
          />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
