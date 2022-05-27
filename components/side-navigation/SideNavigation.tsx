import { useState, useEffect } from "react";
import Image from "next/image";
import aboutIcon from "../../assets/icons/about.png";
import experienceIcon from "../../assets/icons/experience.png";
import skilsIcon from "../../assets/icons/skills.png";
import styles from "../../styles/common.module.css";

const SideNavigation = () => {
  const [showScroll, setShowScroll] = useState(false);
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScrollTop);
    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  });

  return (
    <nav
      className={
        showScroll
          ? `${styles.flex} ${styles.column} ${styles["side-navigation"]}`
          : `${styles.none}`
      }
    >
      <ul>
        <li>
          <a href='#about' className={styles["inline-flex"]}>
            <div className={styles["inner-icon"]}>
              <Image src={aboutIcon} alt='about-icon' />
            </div>
            <div className={styles["self-center"]}>
              <div className={styles["light-text"]}>About</div>
            </div>
          </a>
        </li>
        <li>
          <a href='#experience' className={styles["inline-flex"]}>
            <div className={styles["inner-icon"]}>
              <Image src={experienceIcon} alt='experiense-icon' />
            </div>
            <div className={styles["self-center"]}>
              <div className={styles["light-text"]}>Experience</div>
            </div>
          </a>
        </li>
        <li>
          <a href='#skills' className={styles["inline-flex"]}>
            <div className={styles["inner-icon"]}>
              <Image src={skilsIcon} alt='skills-icon' />
            </div>
            <div className={styles["self-center"]}>
              <div className={styles["light-text"]}>Skills</div>
            </div>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default SideNavigation;
