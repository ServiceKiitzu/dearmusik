import Triangle from "../assets/news/Triangle.png";
import styles from "../styles/news/NewsNav.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NewsNave = () => {
  const [type, setType] = useState("");
  const [itemSwitch, setItemSwitch] = useState(0);
  const sort = [
    "全部",
    "演出資訊",
    "媒體報導",
    "音樂發行",
    "網站新增",
    "退休專案",
  ];
  if (typeof window !== "undefined") {
    const navItem = document.querySelectorAll("div#typeItem a");
    navItem.forEach((item) => {
      item.addEventListener("click", handleActiveSwitch);
    });
    function handleActiveSwitch(e) {
      sessionStorage.setItem("type", e.currentTarget.innerText);
      setType(e.currentTarget.innerText);
    }
  }
  const handleItemSwitch = () => {
    const typeItem = document.getElementById("typeItem");

    if (itemSwitch == 1) {
      typeItem.style.display = "none";
      setItemSwitch(0);
    } else {
      typeItem.style.display = "block";
      setItemSwitch(1);
    }
  };
  useEffect(() => {
    sessionStorage.getItem("type")
      ? setType(sessionStorage.getItem("type"))
      : setType("全部");
    if (window.innerWidth < 1280) {
      const links = document.querySelectorAll("#typeItem a");
      const closeNav = () => {
        const typeItem = document.getElementById("typeItem");
        typeItem.style.display = "none";
        setItemSwitch(0);
      };
      links.forEach((link) => {
        link.addEventListener("click", closeNav);
      });
    }
  }, []);

  return (
    <div className={styles.type} id="type">
      <a onClick={handleItemSwitch}>
        <div className={styles.all} id="all">
          {type}
          <div className={styles.triangle}>
            <Image src={Triangle}></Image>
          </div>
          <div className={styles.triangleM}></div>
        </div>
      </a>
      <div className={styles.typeItem} id="typeItem">
        {sort &&
          sort.map((item, index) => {
            return (
              <Link href={"/news"} key={index}>
                <a>
                  <div>{item}</div>
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default NewsNave;
