import { About, SkillList, Experience, Contact } from "../index";
import styles from "../../styles/common.module.css";

const Resume = () => {
  return (
    <section className={`${styles.about} ${styles["flex-child"]}`}>
      <div className={styles["sticky-home-wrapper"]}>
        <About />
        <SkillList />
        <Experience />
        <Contact />
      </div>
    </section>
  );
};

export default Resume;
