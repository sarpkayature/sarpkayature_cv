import Image from "next/image";
import aboutIcon from "../../assets/icons/about.png";
import styles from "../../styles/common.module.css";

const About = () => {
  return (
    <div className={styles.card} id='about'>
      <div className={styles["inner-flex"]}>
        <div className={styles["inner-icon"]}>
          <Image src={aboutIcon} alt='about-icon' />
        </div>
        <h2 className={styles["self-center"]}>About Me</h2>
      </div>
      <hr />
      <p className={styles["description-spec"]}>
        I created my first hand-coded webpage in 2015 named
        <strong> Global Ticketer</strong>. I was working in a small scale
        company which was a sports tickets trader. I saw an opportunity that,
        sports ticket traders didn’t have a modern system which uses, shares API
        also modern payment systems. In the first quarter of 2019, Global
        Ticketer made a great success. I exited my startup to
        <strong> Dorak Holding </strong>
        at the last quarter of 2019. I have more than 7 years of experience as a
        front-end developer. I have advanced knowledge of Javascript,
        outstanding React, Vue & CSS.
      </p>
    </div>
  );
};

export default About;
