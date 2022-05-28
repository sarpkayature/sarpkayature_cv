import Image from "next/image";
import experienceIcon from "../../assets/icons/experience.png";
import Experiences from "./experience.json";
import styles from "../../styles/common.module.css";

const Experience = () => {
  return (
    <div className={styles.card} id='experience'>
      <div className={styles["inner-flex"]}>
        <div className={styles["inner-icon"]}>
          <Image src={experienceIcon} alt='about-icon' />
        </div>
        <h2 className={styles["self-center"]}>Experience</h2>
      </div>
      <hr />
      <div className={styles["description-spec"]}>
        {Experiences.map(
          ({ id, url, company, title, startDate, endDate, description }) => {
            return (
              <div key={id}>
                <span className={styles["sub-title"]}>
                  <a href={url}>
                    <span className={styles["emphasized-text"]}>{company}</span>{" "}
                  </a>{" "}
                  - {title}
                </span>
                <br />
                <span className={styles["sub-title-date"]}>
                  {startDate} - {endDate}
                </span>
                <br />
                <p className={styles["description-spec"]}>{description}</p>
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default Experience;
