import styles from "../styles/Special.module.scss";
import Image from "next/dist/client/image";
import Img from "../assets/special/img.svg";
import ImgText from "../assets/special/img-text.svg";
import C13 from "../assets/special/c13.png";
import { useEffect } from "react";

const Special = () => {
  let sessions = [
    { id: 1, year: "2022", title: "今年，25歲" },
    { id: 2, year: "2021", title: "今年，26歲" },
    { id: 3, year: "2025", title: "今年，27歲" },
    { id: 4, year: "2024", title: "今年，28歲" },
  ];
  sessions = sessions.reverse();
  if (typeof window !== "undefined" && sessions) {
    const listItems = document.querySelectorAll("div.item a");
    console.log(listItems);
    listItems.forEach((item) => {
      item.addEventListener("click", activeItem);
    });
    function activeItem(e) {
      e.preventDefault();
      listItems.forEach((item) => {
        item.classList.remove(styles.active);
      });
      e.currentTarget.classList.toggle(styles.active);
    }
  }
  useEffect(() => {
    const listItems = document.querySelectorAll("div.item a");
    const lastItem = listItems[0];
    lastItem.classList.add(styles.active);
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <Image src={C13}></Image>
        <div className={styles.new}>
          <div>NEW</div>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.title}>今年，25歲</div>
        <div className={styles.sessions}>
          <div>2021/8/20高雄場</div>
          <div>2021/8/20高雄場</div>
          <div>2021/8/20高雄場</div>
        </div>
        <div className={`${styles.list} list`}>
          {sessions &&
            sessions.map((item) => {
              return (
                <div className={`${styles.item} item`} key={item.id}>
                  <a>
                    <div className={styles.fc}>‧{item.year}</div>
                    <div className={styles.sc}>{item.title}</div>
                    {item.id == sessions.length && (
                      <div className={styles.tc}>
                        <div>NEW</div>
                      </div>
                    )}
                  </a>
                </div>
              );
            })}
        </div>
      </div>
      <div className={styles.img}>
        <Image src={Img}></Image>
      </div>
      <div className={styles.imgText}>
        <Image src={ImgText}></Image>
      </div>
    </div>
  );
};

export default Special;
