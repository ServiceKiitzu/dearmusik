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
import CM1 from "../assets/special/c-m-1.png";
import CM2 from "../assets/special/c-m-2.png";
import CM3 from "../assets/special/c-m-3.png";
import CM4 from "../assets/special/c-m-4.png";
import CM5 from "../assets/special/c-m-5.png";
import CM6 from "../assets/special/c-m-6.png";
import CM7 from "../assets/special/c-m-7.png";
import CM8 from "../assets/special/c-m-8.png";
import CM9 from "../assets/special/c-m-9.png";
import CM10 from "../assets/special/c-m-10.png";
import { useEffect, useState } from "react";

const Special = () => {
  let sessions = [
    {
      id: 1,
      year: "2013",
      title: "我可以",
      cover: C1,
      coverM: CM1,
    },
    { id: 2, year: "2014", title: "大自然三部曲", cover: C2, coverM: CM2 },
    { id: 3, year: "2014", title: "冬。 touch", cover: C3, coverM: CM3 },
    { id: 4, year: "2015", title: "揪朋友", cover: C4, coverM: CM4 },
    { id: 5, year: "2016", title: "關於那些記得的事", cover: C5, coverM: CM5 },
    { id: 6, year: "2016", title: "歡迎加入黃玠國", cover: C6, coverM: CM6 },
    { id: 7, year: "2017", title: "我們一起", cover: C7, coverM: CM7 },
    { id: 8, year: "2018", title: "冬。Love Me", cover: C8, coverM: CM8 },
    {
      id: 9,
      year: "2018",
      title: "我的朋友都結婚生小孩了",
      cover: C9,
      coverM: CM9,
    },
    { id: 10, year: "2020", title: "國民大會", cover: C10, coverM: CM10 },
    {
      id: 11,
      year: "2022",
      title: "今年，25歲",
      cover: C11,
      coverM: CM10,
      date: [
        ["08/20", "高雄", "後台 backstage Live"],
        ["08/26", "台北", "Legacy Taipei"],
        ["09/03", "台中", "Legacy Taichung"],
      ],
    },
  ];
  sessions = sessions.reverse();
  const firstElement = sessions[0];
  const [nowTopic, setNowTopic] = useState(sessions[0]);
  const [pop, setPop] = useState(false);
  const [phone, setPhone] = useState(false);
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
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const square = entry.target;
        if (entry.isIntersecting) {
          square.classList.add("animation");
          return; // if we added the class, exit the function
        }
        // We're not intersecting, so remove the class!
        square.classList.remove("animation");
      });
    });
    const imgTextM = document.querySelector("#imgTextM");
    if (window.innerWidth < 1280) {
      setPhone(true);
      if (imgTextM) {
        observer.observe(imgTextM);
      }
    }
  }, []);
  return (
    <div className={styles.container}>
      {pop && (
        <div className={styles.pop}>
          <div
            className={styles.popCross}
            onClick={() => {
              setPop(false);
            }}
          ></div>
          <div className={styles.popCover}>
            <Image src={nowTopic.cover}></Image>
          </div>
        </div>
      )}
      <div className={styles.topic}>專場</div>
      <div className={styles.leftBlock}>
        <div className={styles.cover}>
          <Image
            src={phone ? sessions[0].cover : nowTopic.cover}
            onClick={() => {
              if (phone) {
                setNowTopic(firstElement);
                setPop(true);
              }
            }}
          ></Image>
        </div>
      </div>
      <div className={styles.rightBlock}>
        <div className={styles.title}>
          {phone ? sessions[0].title : nowTopic.title}
        </div>
        {!phone && nowTopic && nowTopic.date && (
          <div className={styles.sessions}>
            {nowTopic.date.map((item, i) => {
              return (
                <div key={i} className={styles.sItem}>
                  <div className={styles.date}>{item[0]}</div>
                  <div className={styles.place}>{item[1]}</div>
                  <div className={styles.mode}>{item[2]}</div>
                </div>
              );
            })}
          </div>
        )}
        {phone && sessions && (
          <div className={styles.sessions}>
            {sessions[0].date &&
              sessions[0].date.map((item, i) => {
                return (
                  <div key={i} className={styles.sItem}>
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
        <div className={styles.listM}>
          {sessions &&
            sessions.shift() &&
            sessions.map((item, i) => {
              return (
                <div
                  key={i}
                  className={styles.listMItem}
                  onClick={() => {
                    setNowTopic(item);
                    setPop(true);
                  }}
                >
                  <Image src={item.coverM}></Image>
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
      <div className={styles.imgMBox}>
        <div className={styles.imgM}></div>
        <div className={styles.imgTextM} id="imgTextM"></div>
      </div>
    </div>
  );
};

export default Special;
