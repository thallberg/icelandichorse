import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact Us</h2>
        <p>Feel free to reach out</p>
      </div>
      
      <div className={styles.info}>
        <div className={styles.address}>
          <h3>Address</h3>
          <p>123 Horseback Lane</p>
          <p>SE-123 45, Stockholm</p>
          <p>Sweden</p>
        </div>
        
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src="./contact/gmail.png" alt="Email icon" />
            <a href="mailto:t.yourmail@gmail.com">Email me</a>
          </li>
          <li className={styles.link}>
            <img src="./contact/facebook.png" alt="Facebook icon" />
            <a href="" target="_blank">
              Facebook
            </a>
          </li>
          <li className={styles.link}>
            <img src="./contact/instagram.png" alt="Instagram icon" />
            <a href="" target="_blank">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
