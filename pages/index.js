import styles from "../styles/home.module.scss";
import Hero from "../components/Hero";
import Intro from "../components/Intro";
import Works from "../components/Works";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Hero />
        <Intro />
        <Works />
      </main>
      <div className={styles.noise}></div>
    </>
  );
}
