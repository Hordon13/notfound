import styles from "../styles/hero.module.scss";
import throttle from "lodash.throttle";
import { useEffect, useState } from "react";

const Hero = () => {
  const [translateX, setTranslateX] = useState(0);
  const scrollMe = () => setTranslateX(window.scrollY / 100);
  useEffect(() => {
    window.addEventListener("scroll", throttle(scrollMe, 5));
  }, []);

  return (
    <>
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
                <a href="#intro">mine neither</a>
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
          <div
            className={styles.caption}
            style={{ transform: `translateX(${-30 + translateX / 2}%)` }}
          >
            <p>notfoundpagenotfound</p>
            <span>page</span>
            <p>notfoundpagenotfoundpage</p>
          </div>

          <h3>
            yoursandyoursandyoursandyoursandyours<span>and</span>
          </h3>
          <span></span>
          <h3>
            andyoursandyoursandyoursandyoursand<span>yours?</span>
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
        </header>
        <div className={styles.cta}>
          <span>
            <a href="#intro">mine neither</a>
          </span>
        </div>
      </section>
    </>
  );
};

export default Hero;
