import React from "react";
import styles from "./Gallery.module.css";

const Gallery = () => {
  return (
    <section className={`${styles.container}`} id="gallery">
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
