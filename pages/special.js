import styles from "../styles/Special.module.scss";
import Image from "next/dist/client/image";
import Img from "../assets/special/img.svg";
import ImgText from "../assets/special/img-text.svg";
import C1 from "../assets/special/c1.png";
import C2 from "../assets/special/c2.png";
import C3 from "../assets/special/c3.png";
import C4 from "../assets/special/c4.png";
import C5 from "../assets/special/c5.png";
import C6 from "../assets/special/c6.png";
import C7 from "../assets/special/c7.png";
import C8 from "../assets/special/c8.png";
import C9 from "../assets/special/c9.png";
import C10 from "../assets/special/c10.png";
import C11 from "../assets/special/c11.png";
import { useEffect, useState } from "react";

const Special = () => {
  let sessions = [
    {
      id: 1,
      year: "2013",
      title: "我可以",
      cover: C1,
    },
    { id: 2, year: "2014", title: "大自然三部曲", cover: C2 },
    { id: 3, year: "2014", title: "冬。 touch", cover: C3 },
    { id: 4, year: "2015", title: "揪朋友", cover: C4 },
    { id: 5, year: "2016", title: "關於那些記得的事", cover: C5 },
    { id: 6, year: "2016", title: "歡迎加入黃玠國", cover: C6 },
    { id: 7, year: "2017", title: "我們一起", cover: C7 },
    { id: 8, year: "2018", title: "冬。Love Me", cover: C8 },
    { id: 9, year: "2018", title: "我的朋友都結婚生小孩了", cover: C9 },
    { id: 10, year: "2020", title: "國民大會", cover: C10 },
    {
      id: 11,
      year: "2022",
      title: "今年，25歲",
      cover: C11,
      date: [
        ["08/20", "高雄", "後台 backstage Live"],
        ["08/26", "台北", "Legacy Taipei"],
        ["09/03", "台中", "Legacy Taichung"],
      ],
    },
  ];
  sessions = sessions.reverse();
  const [nowTopic, setNowTopic] = useState(sessions[0]);
  useEffect(() => {
    const listItems = document.querySelectorAll("div.item a");
    const lastItem = listItems[0];
    lastItem.classList.add(styles.act);
    listItems.forEach((item) => {
      item.addEventListener("click", activeItem);
    });
    function activeItem(e) {
      e.preventDefault();
      listItems.forEach((item) => {
        item.classList.remove(styles.act);
      });
      e.currentTarget.classList.toggle(styles.act);
    }
  }, []);
  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <div className={styles.cover}>
          <Image src={nowTopic.cover}></Image>
          <div className={styles.new}></div>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.title}>今年，25歲</div>
        {nowTopic && nowTopic.date && (
          <div className={styles.sessions}>
            {nowTopic.date.map((item) => {
              return (
                <div key={item.id} className={styles.sItem}>
                  <div className={styles.date}>{item[0]}</div>
                  <div className={styles.place}>{item[1]}</div>
                  <div className={styles.mode}>{item[2]}</div>
                </div>
              );
            })}
          </div>
        )}
        <div className={`${styles.list} list`}>
          {sessions &&
            sessions.map((item) => {
              return (
                <div
                  className={`${styles.item} item`}
                  key={item.id}
                  onClick={() => {
                    setNowTopic(item);
                  }}
                >
                  {item.id == sessions.length && (
                    <div className={styles.new}></div>
                  )}
                  <a className={styles.aBox}>
                    <div className={styles.fc}>‧{item.year}</div>
                    <div className={styles.sc}>{item.title}</div>
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
