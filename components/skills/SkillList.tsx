import Image from "next/image";
import styles from "../../styles/common.module.css";
import reacticon from "../../assets/skill-icons/react.svg";
import reactnativeicon from "../../assets/skill-icons/reactnative.svg";
import vue from "../../assets/skill-icons/vue.svg";
import mongo from "../../assets/skill-icons/mongodb.svg";
import sass from "../../assets/skill-icons/sass.svg";
import node from "../../assets/skill-icons/nodejs.svg";
import javacript from "../../assets/skill-icons/javascript.svg";
import typecsript from "../../assets/skill-icons/typescript.svg";
import html from "../../assets/skill-icons/html-5.svg";
import graph from "../../assets/skill-icons/graphql.svg";
import svelte from "../../assets/skill-icons/svelte.svg";
import postgresql from "../../assets/skill-icons/postgresql.svg";
import apollo from "../../assets/skill-icons/apollo.svg";
import css3 from "../../assets/skill-icons/css3.svg";
import skillsIcon from "../../assets/icons/skills.png";

const skills = [
  { id: 1, name: "React", icon: reacticon },
  { id: 2, name: "Native", icon: reactnativeicon },
  { id: 3, name: "Vue", icon: vue },
  { id: 4, name: "Svelte", icon: svelte },
  { id: 5, name: "CSS3", icon: css3 },
  { id: 6, name: "SASS", icon: sass },
  { id: 7, name: "HTML5", icon: html },
  { id: 8, name: "Javascript", icon: javacript },
  { id: 9, name: "TypeScript", icon: typecsript },
  { id: 10, name: "Node", icon: node },
  { id: 11, name: "GraphQL", icon: graph },
  { id: 12, name: "Mongo", icon: mongo },
  { id: 13, name: "PostgreSQL", icon: postgresql },
  { id: 14, name: "Apollo", icon: apollo },
];

const SkillList = () => {
  return (
    <div className={styles.card} id='skills'>
      <div className={styles["inner-flex"]}>
        <div className={styles["inner-icon"]}>
          <Image src={skillsIcon} alt='about-icon' />
        </div>
        <h2 className={styles["self-center"]}>Skills</h2>
      </div>
      <hr />
      <span className={styles["sub-title"]}>PRIMARY SKILLS ON</span>
      <div className={`${styles.flex}`}>
        {skills.map(({ id, name, icon }) => {
          return (
            <div className={styles["icon-card"]} key={id}>
              <Image src={icon} alt={name} />
              <span className={styles["skill-name"]}>{name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillList;
