import Abstract from "../components/Abstract";
import Certifications from "../components/Certifications";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Summary from "../components/Summary";

import styles from "../styles/HomePage.module.css";

const HomePage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.summaryContainer}>
        <Summary />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.scrollableContent}>
          <Abstract />
          <Education />
          <Projects />
          <Skills />
          <Experience />
          <Certifications />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
