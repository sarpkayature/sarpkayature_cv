import Image from "next/image";
import hero from "../../assets/hero-modified.png";
import styles from "../../styles/common.module.css";
import { SocialBar } from "../index";
const Hero = () => {
  return (
    <section
      className={`${styles.flex} ${styles.column}  ${styles.hero} ${styles["flex-child"]}`}
    >
      <div className={styles["hero-img-container"]}>
        <Image src={hero} alt='sarpkayature' className={styles["hero-img"]} />
      </div>
      <div className={styles["hero-type-writer"]}>
        <h1>
          My name is
          <span className={styles["emphasized-text"]}> Sarpkaya Ture</span>. I
          am a Front End Developer.
        </h1>
        <p className={styles.pilot}>
          I am the Front-End Developer in Turkey, Istanbul. I have serious
          passion for UI libraries & frameworks, such as{" "}
          <span className={styles["emphasized-text"]}>React</span> ,
          <span className={styles["emphasized-text"]}> React Native</span> &
          <span className={styles["emphasized-text"]}> Vue</span>. I am
          experienced animations and creating intuitive, dynamic user
          experiences.
        </p>
        <SocialBar />
        <div className={`${styles.flex} ${styles["actions-container"]}`}>
          <button className={styles["action-button"]}>Download CV</button>
          <div className={styles["action-button"]}>
            <a href='#contact'>Contact</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
