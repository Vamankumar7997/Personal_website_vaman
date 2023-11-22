import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I am Vaman</h1>
        <p className={styles.description}>
          I am a front-end developer with 2 years of experience using React,
          Bootstrap and tailwind. Reach out if you did like to learn more!
        </p>
        <a
          href="mailto:tamaranavamankumar@gmail.com"
          className={styles.contactBtn}
        >
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero Image"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};

export default Hero;
