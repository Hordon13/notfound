import { useState } from "react";
import styles from "../styles/works.module.scss";

const Works = () => {
  const [state, setState] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <div
          className={`${styles.project} ${state && styles.projectExpanded}`}
          onClick={() => setState(!state)}
        >
          <div className={styles.circle}>
            <img src="/io.png" alt="io logo" />
          </div>
          <svg
            width="500px"
            height="500px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#000">
                <textPath
                  xlinkHref="#circlePath"
                  letterSpacing="0.65"
                  fill="#fff"
                  fontSize="11"
                  fontFamily="Altero"
                >
                  line and round • line and round • line and round •
                </textPath>
              </text>
            </g>
          </svg>
        </div>
        <div
          className={`${styles.project} ${state2 && styles.projectExpanded}`}
          onClick={() => setState2(!state2)}
        >
          <div className={styles.circle}>
            <img src="/io.png" alt="io logo" />
          </div>
          <svg
            width="500px"
            height="500px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#000">
                <textPath
                  xlinkHref="#circlePath"
                  letterSpacing="0.65"
                  fill="#fff"
                  fontSize="11"
                  fontFamily="Altero"
                >
                  line and round • line and round • line and round •
                </textPath>
              </text>
            </g>
          </svg>
        </div>
        <div
          className={`${styles.project} ${state3 && styles.projectExpanded}`}
          onClick={() => setState3(!state3)}
        >
          <div className={styles.circle}>
            <img src="/io.png" alt="io logo" />
          </div>
          <svg
            width="500px"
            height="500px"
            viewBox="0 0 300 300"
            enableBackground="new 0 0 300 300"
            xmlSpace="preserve"
          >
            <defs>
              <path
                id="circlePath"
                d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <circle cx="150" cy="100" r="75" fill="none" />
            <g>
              <use xlinkHref="#circlePath" fill="none" />
              <text fill="#000">
                <textPath
                  xlinkHref="#circlePath"
                  letterSpacing="0.65"
                  fill="#fff"
                  fontSize="11"
                  fontFamily="Altero"
                >
                  line and round • line and round • line and round •
                </textPath>
              </text>
            </g>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Works;
