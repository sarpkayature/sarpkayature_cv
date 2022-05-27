import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/common.module.css";
import { Hero, Resume, SideNavigation } from "../components/index";

const Home: NextPage = () => {
  return (
    <>
      <SideNavigation />
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
