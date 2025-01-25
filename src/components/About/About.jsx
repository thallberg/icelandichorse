import React, { useState } from "react";
import styles from "./About.module.css";
import { useInView } from "react-intersection-observer";

const About = () => {
  const [inView, setInView] = useState(false);

  const { ref, inView: isInView } = useInView({
    triggerOnce: true, // När den triggas första gången stannar den där
    threshold: 0.5, // För att trigga när 50% av About är synlig
  });

  React.useEffect(() => {
    if (isInView) {
      setInView(true); // Sätt inView till true när About-sektionen är synlig
    }
  }, [isInView]);

  return (
    <section
      className={`${styles.container} ${inView ? styles.animate : ""}`}
      id="about"
      ref={ref}
    >
      <h2 className={styles.title}>This is us</h2>
      <div className={styles.content}>
        <img src="./about/aboutImg.webp" alt="" className={styles.aboutImage} />

        <div className={styles.aboutItemText}>
          <h3>The journey begins here</h3>
          <p>
            Our focus is on providing memorable experiences through horse
            rentals that are safe, enjoyable, and suited for all levels of
            riders. We aim to make your time with these incredible horses both
            relaxing and inspiring, ensuring a connection with nature and this
            unique breed.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
