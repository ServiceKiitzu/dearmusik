import Link from "next/link";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../styles/works/WorksNavM.module.scss";
import Router from "next/router";
import { useRouter } from "next/router";
import Music from "../pages/works/music";

const WorksNavM = () => {
  const [handle, setHandle] = useState(0);
  const [pageName, setPageName] = useState("音樂");

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

  const router = useRouter();
  useEffect(() => {
    const pathName = router.pathname.split("/").pop();
    if (pathName == "music") {
      setPageName("音樂");
    } else if (pathName == "mv") {
      setPageName("MV");
    } else {
      setPageName("退休專案");
    }
  }, []);

  return (
    <div className={styles.nav}>
      <div className={styles.activeItem} onClick={switchNavItem}>
        {pageName}
        <div className={styles.ddArrow}></div>
      </div>
      <div className={styles.line}></div>
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
