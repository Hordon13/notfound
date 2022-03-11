import styles from "../styles/home.module.scss";
import throttle from "lodash.throttle";
import { useEffect, useState } from "react";

export default function Home() {
  const [translateX, setTranslateX] = useState(0);
  const [translateXmob, setTranslateXmob] = useState([]);
  const scrollMe = () => setTranslateX(window.scrollY / 100);
  useEffect(() => {
    window.addEventListener("scroll", throttle(scrollMe, 10));
    for (let i = 0; i < 20; i++) {
      setTranslateXmob((arr) => [...arr, Math.floor(Math.random() * 30)]);
    }
  }, []);

  return (
    <>
      <main className={styles.container}>
        <section className={styles.heroDesktop}>
          <header>
            <div
              className={styles.caption}
              style={{ transform: `translateX(${-25 + translateX / 2}%)` }}
            >
              <p>pagenotfound</p>
              <span>page</span>
              <p>notfoundpagenotfound</p>
            </div>
            <div className={styles.headline}>
              <div className={styles.cta}>
                <span>
                  <a href="">mine neither</a>
                </span>
              </div>
              <h2>and yours?</h2>
            </div>
            <div
              className={styles.caption}
              style={{ transform: `translateX(${-30 - translateX}%)` }}
            >
              <p>pagenotfoundpage</p>
              <span>not</span>
              <p>foundpagenotfound</p>
            </div>
            <div
              className={styles.caption}
              style={{ transform: `translateX(${-40 - translateX / 2}%)` }}
            >
              <p>pagenotfoundpagenot</p>
              <span>found</span>
              <p>pagenotfoundpagenot</p>
            </div>
          </header>
        </section>
        <section className={styles.heroMobile}>
          <header>
            {[...Array(10)].map((_, i) => (
              <p
                style={{
                  transform: `translateX(-${translateXmob[i]}%)`,
                }}
                key={i}
              >
                pagenotfoundpagepagenotfoundpagepagenotfoundpage
              </p>
            ))}
            <div
              className={styles.caption}
              style={{ transform: `translateX(${-30 + translateX / 2}%)` }}
            >
              <p>notfoundpagenotfound</p>
              <span>page</span>
              <p>notfoundpagenotfoundpage</p>
            </div>

            <h3>
              yoursandyoursandyoursandyoursandyoursspan<span>and</span>
            </h3>
            <span></span>
            <h3>
              andyoursandyoursandyoursandyourssand<span>yours?</span>
            </h3>
            <div
              className={styles.caption}
              style={{ transform: `translateX(${-33 - translateX}%)` }}
            >
              <p>foundpagenotfoundpage</p>
              <span>not</span>
              <p>foundpagenotfoundpagenotfound</p>
            </div>
            <div
              className={styles.caption}
              style={{ transform: `translateX(${-37 - translateX / 2}%)` }}
            >
              <p>foundpagenotfoundpagenot</p>
              <span>found</span>
              <p>pagenotfoundpagenotfoundpagenot</p>
            </div>
            {[...Array(10)].map((_, i) => (
              <p
                style={{
                  transform: `translateX(-${translateXmob[i]}%)`,
                }}
                key={i}
              >
                pagenotfoundpagepagenotfoundpagepagenotfoundpage
              </p>
            ))}
          </header>
        </section>
        <section className={styles.intro}></section>
        <section className={styles.references}></section>
        <section className={styles.contact}></section>
      </main>
      <div className={styles.noise}></div>
    </>
  );
}
