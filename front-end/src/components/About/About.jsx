import styles from "./about.module.css";
import { tittle, subtittle, one, two, three, four, five } from "./const";

const About = () => {
  return (
    <div className={styles.about_container}>
      <div className={styles.presentation}>
        <h1 className={styles.about_tittle}>{tittle}</h1>
        <p className={styles.about_subtittle}>{subtittle}</p>
        <p className={styles.about_p}>{one}</p>
        <p className={styles.about_p}>{two}</p>
        <p className={styles.about_p}>{three}</p>
        <p className={styles.about_p_end}>{four}</p>
        <p className={styles.about_p_end}>{five}</p>
      </div>
    </div>
  );
};

export default About;