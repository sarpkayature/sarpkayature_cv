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
        I created my first hand-coded webpage in <strong>2015</strong> named
        <strong> Global Ticketer</strong>. I was working in a small scale
        company which was a sports tickets trader. I saw an opportunity that,
        sports ticket traders didn’t have a modern system which uses, shares API
        also modern payment systems. In the first quarter of{" "}
        <strong>2019</strong>, Global Ticketer made a great success. I{" "}
        <strong>exited</strong> my startup to
        <strong> Dorak Holding </strong>
        at the last quarter of 2019. I have more than 7 years of experience as a
        front-end developer. I have advanced knowledge of{" "}
        <strong>Javascript</strong>, outstanding <strong>React</strong>,{" "}
        <strong>Vue</strong> & <strong>CSS</strong>.
      </p>
    </div>
  );
};

export default About;
