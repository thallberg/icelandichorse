import React, { useEffect, useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const toggleTheme = () => {
    setIsLightMode((prev) => !prev);
  };

  useEffect(() => {
    if (isLightMode) {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }, [isLightMode]);

  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        Home
      </a>

      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={menuOpen ? "./navbar/closeIcon.png" : "./navbar/menuIcon.png"}
          alt="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
        />

         

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setMenuOpen(false)}
        >
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

              {/* Dark/Light Mode Toggle */}
              <img
              src="./navbar/moon.png"
              alt="Dark Mode Toggle"
              className={styles.darkModeToggle}
              onClick={toggleTheme}
            />
          <li>
       
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
