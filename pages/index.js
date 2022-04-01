import styles from "../styles/home.module.scss";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Works from "../components/Works";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Hero />
        <Intro />
        <Works />
        <Contact />
      </main>
      <div className={styles.noise}></div>
    </>
  );
}
