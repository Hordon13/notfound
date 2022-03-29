import styles from "../styles/title.module.scss";
import { useEffect, useState, useCallback } from "react";
import throttle from "lodash.throttle";

const Title = ({ text }) => {
  const [isPassed, setIsPassed] = useState(false);
  const [center, setCenter] = useState(0);
  const [offset, setOffset] = useState(100);

  useEffect(() => {
    const header = document.getElementById(text);
    const rect = header.getBoundingClientRect();
    setCenter(rect.top);
  }, []);

  const distort = useCallback(() => {
    const distance = window.scrollY - (center - window.innerHeight / 2);
    if (distance > 0 && distance < window.innerHeight / 2) {
      // element is passed the middle of the screen
      setIsPassed(true);
    } else if (distance < 0 && Math.abs(distance) < window.innerHeight / 2) {
      setOffset(Math.abs(distance) / (window.innerHeight / 2));
    }
  }, [center]);

  useEffect(() => {
    window.addEventListener("scroll", throttle(distort, 10));
    return () => window.removeEventListener("scroll", throttle(distort, 10));
  }, [distort]);

  return (
    <h2
      className={styles.container}
      id={text}
      style={{
        color: isPassed && "#ffc000",
      }}
    >
      <span>{text}</span>
      <span
        style={{
          transform: `translate(${1 * 20 * offset}px, ${1 * 20 * offset}px)`,
        }}
      >
        {text}
      </span>
      <span
        style={{
          transform: `translate(${2 * 20 * offset}px, ${2 * 20 * offset}px)`,
        }}
      >
        {text}
      </span>
      <span
        style={{
          transform: `translate(${3 * 20 * offset}px, ${3 * 20 * offset}px)`,
        }}
      >
        {text}
      </span>
    </h2>
  );
};

export default Title;