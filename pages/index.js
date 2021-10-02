import styles from "../styles/home.module.scss";
import throttle from "lodash.throttle";
import { useEffect, useState } from "react";

export default function Home() {
  const [translateX, setTranslateX] = useState(0);
  useEffect(() => {
    window.addEventListener("scroll", throttle(scrollMe, 10));
  }, []);

  const scrollMe = () => setTranslateX(window.scrollY / 100);

  return (
    <div className={styles.container}>
      <div className={styles.noise}></div>
      <div className={styles.title}>
        <div>
          <div
            className={styles.line}
            style={{ transform: `translateX(${-25 + translateX / 2}%)` }}
          >
            <p>pagenotfound</p>
            <span>page</span>
            <p>notfoundpagenotfound</p>
          </div>
          <div className={styles.highlight}>and yours?</div>
          <div
            className={styles.line}
            style={{ transform: `translateX(${-30 - translateX}%)` }}
          >
            <p>pagenotfoundpage</p>
            <span>not</span>
            <p>foundpagenotfound</p>
          </div>
          <div
            className={styles.line}
            style={{ transform: `translateX(${-40 - translateX / 3}%)` }}
          >
            <p>pagenotfoundpagenot</p>
            <span>found</span>
            <p>pagenotfoundpagenot</p>
          </div>
        </div>
      </div>
    </div>
  );
}
