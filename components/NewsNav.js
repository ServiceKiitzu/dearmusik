import Triangle from "../assets/news/Triangle.png";
import styles from "../styles/news/NewsNav.module.scss";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import TypeContext from "../context/TypeContext";

const NewsNave = () => {
  const context = useContext(TypeContext);
  // const [type, setType] = useState("");
  const [itemSwitch, setItemSwitch] = useState(0);
  const sort = [
    "全部",
    "演出資訊",
    "媒體報導",
    "音樂發行",
    "網站新增",
    "退休專案",
  ];

  // if (typeof window !== "undefined") {
  //   const navItem = document.querySelectorAll("div#typeItem a");
  //   navItem.forEach((item) => {
  //     item.addEventListener("click", handleActiveSwitch);
  //   });
  //   function handleActiveSwitch(e) {
  //     // setType(e.currentTarget.innerText);
  //     context.setType(e.currentTarget.innerText);
  //   }
  // }
  const switchType = (index) => {
    context.setType(sort[index]);
  };
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
      <div className={styles.all} id="all" onClick={handleItemSwitch}>
        {context.type}
        <div className={styles.triangle}>
          <Image src={Triangle} alt=""></Image>
        </div>
        <div className={styles.triangleM}></div>
      </div>
      <div className={styles.typeItem} id="typeItem">
        {sort &&
          sort.map((item, index) => {
            return (
              <Link href={"/news"} key={index}>
                <a>
                  <div
                    onClick={() => {
                      switchType(index);
                    }}
                  >
                    {item}
                  </div>
                </a>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default NewsNave;
