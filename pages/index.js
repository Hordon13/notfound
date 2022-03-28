import styles from "../styles/home.module.scss";
import Hero from "../components/Hero";
import Intro from "../components/Intro";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Hero />
        <Intro />
        <section className={styles.references}></section>
        <section className={styles.contact}></section>
      </main>
      <div className={styles.noise}></div>
    </>
  );
}
