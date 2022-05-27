import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/common.module.css";
import { Hero, Resume, SocialBar } from "../components/index";

const Home: NextPage = () => {
  return (
    <>
      <main>
        <div className={styles.container}>
          <div className={styles.flex}>
            <Hero />
            <Resume />
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
