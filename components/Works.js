import { useState, useEffect } from "react";
import styles from "../styles/works.module.scss";

const Works = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const center = document.getElementById("p2");
    const centerPos =
      center.offsetLeft - (175 / 2 + (window.innerWidth - 2 * 175) / 2);
    const container = document.getElementById("projects");
    container.scrollLeft = centerPos;
  }, []);

  const handleClick = (id) => {
    setSelectedProject(selectedProject === id ? null : id);
    const target = document.getElementById(id);
    const container = document.getElementById("projects");

    if (selectedProject !== id) {
      container.style.pointerEvents = "none";
      setTimeout(() => {
        const offset = target.offsetLeft;
        container.scrollTo({ left: offset - 30, behavior: "smooth" });
      }, 400);
      setTimeout(() => {
        container.style.overflow = "hidden";
        container.style.pointerEvents = "initial";
      }, 1000);
    } else {
      container.style.overflow = "scroll";
      setTimeout(() => {
        const center = document.getElementById("p2");
        const centerPos =
          center.offsetLeft - (175 / 2 + (window.innerWidth - 2 * 175) / 2);
        container.scrollTo({ left: centerPos, behavior: "smooth" });
      }, 400);
    }
  };

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2>
          featured <br /> works
        </h2>
        <div id="projects" className={styles.projects}>
          <div
            id="p1"
            className={`${styles.project} ${
              selectedProject === "p1" && styles.projectExpanded
            } ${
              selectedProject && selectedProject !== "p1" && styles.projectFade
            }`}
            onClick={() => handleClick("p1")}
          >
            <div className={styles.circle}>
              <svg viewBox="0 0 56 28">
                <g fill="#000" fillRule="evenodd">
                  <path d="m0 0h6v28h-6z" />
                  <path d="m42 0c7.7319865 0 14 6.2680135 14 14s-6.2680135 14-14 14-14-6.2680135-14-14 6.2680135-14 14-14zm0 6c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8-3.581722-8-8-8z" />
                </g>
              </svg>
              <span>io line and round</span>
              <span>$$</span>
              <span>
                <a
                  href="https://lineandround.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  visit site
                </a>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 2H22V7"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13 11L21.5 2.5"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span>2021</span>
            </div>
            <svg
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
                    letterSpacing="1.1"
                    fill="#fff"
                    fontSize="14"
                    fontFamily="Altero"
                  >
                    io line and round • io line and round •
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
          <div
            id="p2"
            className={`${styles.project} ${
              selectedProject === "p2" && styles.projectExpanded
            }  ${
              selectedProject && selectedProject !== "p2" && styles.projectFade
            }`}
            onClick={() => handleClick("p2")}
          >
            <div className={styles.circle}>
              <svg fill="none" viewBox="0 0 125 125">
                <g fill="#000">
                  <path
                    clipRule="evenodd"
                    d="m67.3728 65.4586c3.023 4.5024 8.66 7.2294 14.4798 7.0972 5.668-.129 10.8882-3.6178 13.826-8.3036 2.882-4.5942 3.1454-11.3603.6104-16.1566-2.5876-4.8973-7.6962-8.7359-13.1612-9.3282-5.2635-.5706-9.7105 2.2745-15.5025 2.8544-5.7919.5815-12.1076-1.1644-15.5396-4.4977-.7128-.6934-1.5573-1.393-2.3103-2.7161-.6973-1.2267-.815-2.8778.2417-3.9334.9715-.9717 2.7689-.9048 3.9341-.1539 1.1931.7696 1.8687 1.4008 2.4017 1.8812 2.9982 2.7021 7.5103 4.1091 11.5064 3.5882 2.9409-.384 5.7331-1.5842 8.9467-2.2123 3.2136-.6297 6.8548-.6965 9.7074.0187 5.6711 1.4225 8.4013 4.8413 11.164 7.6771 2.4926 2.559 6.8916 3.3861 10.3876 2.5668 3.644-.8535 6.598-3.7981 7.919-7.2185 1.297-3.3597.651-7.7766-1.554-10.6217-2.18-2.8141-5.866-4.7668-9.65-4.6315-3.11.1119-5.3827 1.7599-7.9393 3.2276-2.5102 1.4412-5.4278 3.0814-7.9349 2.3724-2.7116-.7649-4.5214-3.7499-6.2785-6.9573-1.7679-3.2306-3.3329-6.9526-5.7222-9.5723-3.2988-3.61469-9.0938-5.02947-13.9189-4.21636-4.839.81467-9.458 4.97666-10.9098 9.64076-.5238 1.6791-1.8966 8.0611-5.8509 9.5381-1.9585.7323-4.5384.37-6.6038-.667-2.0407-1.0245-3.5793-2.5777-4.4811-3.2991-4.323-3.4576-10.9548-4.1681-16.1858-2.3538-5.1923 1.8019-9.34953 7.1144-10.59531 12.4999-1.24267 5.3684.82742 11.9354 4.91031 15.6512 3.9713 3.6131 10.2993 5.4041 15.8217 4.1542 3.353-.7587 6.2722-3.0675 10.1986-4.3128 3.838-1.2173 8.784-1.5671 13.0295-.1213 4.2053 1.4319 7.7195 4.8632 9.9678 8.3597 2.2359 3.4763 3.0556 7.1221 5.0854 10.146z"
                    fillRule="evenodd"
                  />
                  <path
                    clipRule="evenodd"
                    d="m57.6297 59.5414c-3.023-4.5024-8.66-7.2294-14.4798-7.0972-5.668.129-10.8882 3.6178-13.826 8.3036-2.882 4.5942-3.1454 11.3603-.6104 16.1566 2.5876 4.8973 7.6962 8.7359 13.1612 9.3282 5.2636.5706 9.7105-2.2745 15.5025-2.8544 5.7919-.5815 12.1076 1.1644 15.5397 4.4977.7127.6934 1.5572 1.393 2.3102 2.7161.6973 1.2267.815 2.8778-.2417 3.9334-.9715.9717-2.7689.9048-3.9341.1539-1.1931-.7696-1.8687-1.4008-2.4017-1.8812-2.9982-2.7021-7.5103-4.1091-11.5064-3.5882-2.9409.384-5.7331 1.5842-8.9467 2.2123-3.2136.6297-6.8548.6965-9.7074-.0187-5.6711-1.4225-8.4013-4.8413-11.164-7.6771-2.4931-2.559-6.892-3.3861-10.3876-2.5668-3.6444.8535-6.5977 3.7981-7.91941 7.2185-1.29691 3.3597-.65078 7.7766 1.55411 10.6217 2.1801 2.8142 5.8663 4.7672 9.6501 4.6312 3.1098-.112 5.3829-1.76 7.9395-3.227 2.5102-1.4415 5.4278-3.0817 7.9349-2.3727 2.7116.7649 4.5214 3.7497 6.2785 6.9577 1.7679 3.23 3.3329 6.952 5.7222 9.572 3.2988 3.615 9.0938 5.029 13.9189 4.216 4.839-.814 9.458-4.976 10.9098-9.64.5238-1.68 1.8966-8.062 5.8509-9.5386 1.9585-.7323 4.5384-.37 6.6038.6666 2.0407 1.025 3.5793 2.578 4.4811 3.299 4.323 3.458 10.9551 4.169 16.1861 2.354 5.192-1.802 9.349-7.1141 10.595-12.4996 1.243-5.3684-.827-11.9354-4.91-15.6512-3.972-3.6131-10.3-5.4041-15.822-4.1542-3.353.7587-6.2722 3.0675-10.1986 4.3128-3.838 1.2173-8.784 1.5671-13.0295.1213-4.2053-1.4319-7.7195-4.8632-9.9678-8.3597-2.2359-3.4763-3.0556-7.1221-5.0854-10.146z"
                    fillRule="evenodd"
                  />
                  <ellipse cx="12.5712" cy="65.953" rx="10.0712" ry="10.1052" />
                  <ellipse cx="112.429" cy="59.07" rx="10.0712" ry="10.1052" />
                </g>
              </svg>
              <span>solarmada</span>
              <span>$$$</span>
              <span>
                <a
                  href="https://www.solarmada.eu/"
                  target="_blank"
                  rel="noreferrer"
                >
                  visit site
                </a>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 2H22V7"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13 11L21.5 2.5"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span>2022</span>
            </div>
            <svg
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
                    letterSpacing="1"
                    fill="#fff"
                    fontSize="14"
                    fontFamily="Altero"
                  >
                    solarmada • solarmada • solarmada •
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
          <div
            id="p3"
            className={`${styles.project} ${
              selectedProject === "p3" && styles.projectExpanded
            }  ${
              selectedProject && selectedProject !== "p3" && styles.projectFade
            }`}
            onClick={() => handleClick("p3")}
          >
            <div className={styles.circle}>
              <svg fill="none" viewBox="0 0 1000 120">
                <g clipRule="evenodd" fill="#000" fillRule="evenodd">
                  <path d="m915.863 118.121c7.873-.06 16.205.169 24.775-.289 8.581-.458 17.4-1.593 25.642-5.435 8.232-3.842 15.887-10.372 21.262-19.6188 5.385-9.257 8.491-21.2116 8.491-33.1662 0-11.9545-3.106-23.9189-8.491-33.166-5.375-9.2471-13.03-15.7868-21.262-19.61898-8.242-3.84218-17.061-4.977-25.642-5.43487-8.57-.457878-16.902-.22886-24.775-.28858h-19.948v117.01743zm-3.544-111.38366.02 105.73966c13.557-.289 29.335 1.065 42.992-6.51 6.828-3.792 13.129-9.8144 17.499-17.9168 4.38-8.0925 6.828-18.2753 6.818-28.4581 0-10.1728-2.448-20.3456-6.828-28.448-4.37-8.0924-10.671-14.1145-17.509-17.8969-13.657-7.57488-29.435-6.21124-42.992-6.50986z" />
                  <path d="m728.158 1.10733c4.838.2588 12.532-.796253 21.123 2.16999 4.3 1.47316 8.819 3.96156 12.452 7.78388 3.633 3.8222 6.371 8.9783 7.506 14.5823 1.124 5.614.657 11.6659-1.344 16.9514-2.011 5.2855-5.535 9.8045-9.516 12.9201-7.974 6.2311-17.778 6.868-24.05 6.8979l38.075 55.6821h-19.888l-38.055-55.6622h-24.318v55.6822h-16.404v-117.0276zm-8.72 55.68177c4.241-.2489 11.487.8461 19.112-2.4785 3.822-1.6524 7.734-4.4195 10.512-8.3513 2.777-3.9417 4.399-9.0679 4.399-14.1842 0-5.1262-1.622-10.2425-4.399-14.1842-2.778-3.9417-6.69-6.6989-10.512-8.36122-7.625-3.31462-14.871-2.22964-19.112-2.47849h-29.295v50.03791z" />
                  <path d="m3.00098 118.102h26.43822l58.4206-117.00752h-26.4381z" />
                  <path d="m441.121 1.10645v5.6537h50.219v111.35385h16.404v-111.35385h50.169v-5.6537z" />
                  <path d="m247.951 1.09253-.029 117.02747h84.839v-5.654h-68.405v-111.37347z" />
                </g>
              </svg>
              <span>altrd studio</span>
              <span>$</span>
              <span>
                <a
                  href="https://www.altrd.studio/"
                  target="_blank"
                  rel="noreferrer"
                >
                  visit site
                </a>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path
                    d="M17 2H22V7"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M21 13V19C21 20.1046 20.1046 21 19 21H5C3.89543 21 3 20.1046 3 19V5C3 3.89543 3.89543 3 5 3H11"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                  <path
                    d="M13 11L21.5 2.5"
                    stroke="#000"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              </span>
              <span>2021</span>
            </div>
            <svg
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
                    letterSpacing="1.2"
                    fill="#fff"
                    fontSize="14"
                    fontFamily="Altero"
                  >
                    altrd • altrd • altrd • altrd • altrd •
                  </textPath>
                </text>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
