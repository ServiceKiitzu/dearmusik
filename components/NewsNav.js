import Triangle from "../assets/news/Triangle.png";
import styles from "../styles/news/NewsNav.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const NewsNave = () => {
  const [type, setType] = useState("");
  const [itemSwitch, setItemSwitch] = useState(1);
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
  }, []);

  return (
    <div className={styles.type} id="type">
      <a onClick={handleItemSwitch}>
        <div className={styles.all} id="all">
          {type}
          <div className={styles.triangle}>
            <Image src={Triangle}></Image>
          </div>
        </div>
      </a>
      <div className={styles.typeItem} id="typeItem">
        <Link href={"/news"}>
          <a>
            <div>全部</div>
          </a>
        </Link>
        <Link href={"/news"}>
          <a>
            <div>報導</div>
          </a>
        </Link>
        <Link href={"/news"}>
          <a>
            <div>演出</div>
          </a>
        </Link>
        <Link href={"/news"}>
          <a>
            <div>作品</div>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default NewsNave;
