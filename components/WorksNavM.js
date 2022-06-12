import Link from "next/link";
import { useState } from "react";
import styles from "../styles/works/WorksNavM.module.scss";

const WorksNavM = () => {
  const [handle, setHandle] = useState(0);

  const switchNavItem = () => {
    if (typeof window !== "undefined") {
      const navItem = document.getElementById("navItem");
      if (handle) {
        navItem.style.display = "none";
        setHandle(0);
        return;
      }
      navItem.style.display = "block";
      setHandle(1);
    }
  };

  return (
    <div className={styles.nav}>
      <div className={styles.activeItem} onClick={switchNavItem}>
        退休專案
      </div>
      <div className={styles.navItem} id="navItem">
        <ul>
          <li>
            <Link href={"/works/music"}>
              <a>音樂</a>
            </Link>
          </li>
          <li>
            <Link href={"/works/mv"}>
              <a>MV</a>
            </Link>
          </li>
          <li>
            <Link href={"/works/project"}>
              <a>退休專案</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WorksNavM;
