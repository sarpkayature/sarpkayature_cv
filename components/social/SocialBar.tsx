import Image from "next/image";
import styles from "../../styles/common.module.css";
import twitterIcon from "../../assets/social-icons/twitter.png";
import linkledinIcon from "../../assets/social-icons/linkledin.png";
import mediumIcon from "../../assets/social-icons/medium.svg";
import githubIcon from "../../assets/social-icons/github.png";

const SocialBar = () => {
  return (
    <div className={`${styles.flex} ${styles["m-1"]}`}>
      <div className={styles["social-bar-container"]}>
        <a
          href='https://twitter.com/sarpkayature'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={twitterIcon} alt='twitter' />
        </a>
      </div>
      <div className={styles["social-bar-container"]}>
        <a
          href='https://medium.com/@sarpkayature'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={mediumIcon} alt='medium' />
        </a>
      </div>
      <div className={styles["social-bar-container"]}>
        <a
          href='https://www.linkedin.com/in/sarpkayature/'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={linkledinIcon} alt='linkledin' />
        </a>
      </div>
      <div className={styles["social-bar-container"]}>
        <a
          href='https://github.com/sarpkaya93'
          target='_blank'
          rel='noreferrer'
        >
          <Image src={githubIcon} alt='github' />
        </a>
      </div>
    </div>
  );
};

export default SocialBar;
