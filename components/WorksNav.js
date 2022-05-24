import Link from "next/link";
import styles from "../styles/works/WorksNav.module.scss";
import { useRouter } from "next/router";
import { useEffect } from "react";

const WorksNav = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      let links = document.querySelectorAll("div#links a");
      links.forEach((link) => {
        if (link.pathname === router.asPath) {
          link.classList.add(styles.act);
        }
      });
    }
  }, []);
  return (
    <div className={styles.box}>
      <div>作品</div>
      <div className={styles.links} id="links">
        <Link href={"/works/music"}>
          <a>音樂</a>
        </Link>
        <Link href={"/works/mv"}>
          <a>MV</a>
        </Link>
        <Link href={"/works/project"}>
          <a>退休專案</a>
        </Link>
      </div>
    </div>
  );
};

export default WorksNav;
