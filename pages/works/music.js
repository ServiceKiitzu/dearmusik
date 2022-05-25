import WorksNav from "../../components/WorksNav";
import Imusic from "../../assets/navbar/imusic.svg";
import Spotify from "../../assets/navbar/spotify.svg";
import Kkbox from "../../assets/navbar/kkbox.svg";
import ImgText from "../../assets/works/music/img-text.svg";
import Img from "../../assets/works/music/img.svg";
import Image from "next/image";
import styles from "../../styles/works/music.module.scss";
import AU from "../../assets/works/music/arrow-up.svg";
import AUA from "../../assets/works/music/arrow-up-active.svg";
import AD from "../../assets/works/music/arrow-down.svg";
import ADA from "../../assets/works/music/arrow-down-active.svg";
import S1 from "../../assets/works/music/S1.png";
import S2 from "../../assets/works/music/S2.png";
import S3 from "../../assets/works/music/S3.png";
import S4 from "../../assets/works/music/S4.png";
import S5 from "../../assets/works/music/S5.png";
import S6 from "../../assets/works/music/S6.png";
import S7 from "../../assets/works/music/S7.png";
import S8 from "../../assets/works/music/S8.png";
import S9 from "../../assets/works/music/S9.png";
import S10 from "../../assets/works/music/S10.png";
import S11 from "../../assets/works/music/S11.png";
import { useState, useEffect } from "react";

const Music = () => {
  const musics = [
    {
      id: 1,
      year: "2007",
      title1: "綠色的日子",
      title2: "",
      feat: "",
      sImg: S1,
    },
    {
      id: 2,
      year: "2014",
      title1: "放個假",
      title2: "(SIn)",
      feat: "",
      sImg: S2,
    },
    {
      id: 3,
      year: "2010",
      title1: "我的高中同學",
      title2: "",
      feat: "",
      sImg: S3,
    },
    {
      id: 4,
      year: "2014",
      title1: "大自然的力量",
      title2: "",
      feat: "",
      sImg: S4,
    },
    {
      id: 5,
      year: "2015",
      title1: "十年熟成",
      title2: "",
      feat: "",
      sImg: S5,
    },
    {
      id: 6,
      year: "2016",
      title1: "一片黑暗之中",
      title2: "",
      feat: "",
      sImg: S6,
    },
    {
      id: 7,
      year: "2017",
      title1: "我們",
      title2: "(Sin)",
      feat: "",
      sImg: S7,
    },
    {
      id: 8,
      year: "2017",
      title1: "海邊情歌",
      title2: "(sin)",
      feat: "",
      sImg: S8,
    },
    {
      id: 9,
      year: "2017",
      title1: "相片蒐集簿",
      title2: "(Sin)",
      feat: "",
      sImg: S9,
    },
    {
      id: 10,
      year: "2019",
      title1: "安卓雅--",
      title2: "像月亮的人",
      feat: "feat.黃玠",
      sImg: S10,
    },
    {
      id: 11,
      year: "2021",
      title1: "PUZZLEMAN--",
      title2: "打打多多",
      feat: "feat.黃玠",
      sImg: S11,
    },
  ];
  const [page, setPage] = useState(0);
  const count = 9;
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [musicData, setMusicData] = useState(musics[musics.length - 1]);
  const [itemIndex, setItemIndex] = useState(musics.length);

  const musicReverse = [...musics].reverse();
  let totalPage = Math.ceil(musicReverse.length / count) - 1;
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + count;
    setCurrentItems(musicReverse.slice(itemOffset, endOffset));
  }, [itemOffset]);

  const handlePagePrev = () => {
    if (page > 0) {
      let num = page;
      num--;
      const newOffset = num * count;
      setItemOffset(newOffset);
      setPage(num);
    }
  };

  const handlePageNext = () => {
    if (page < totalPage) {
      let num = page;
      num++;
      const newOffset = num * count;
      setItemOffset(newOffset);
      setPage(num);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.leftBlock}>
        <div>
          <div className={styles.sImg}>
            <Image src={musicData.sImg}></Image>
            {itemIndex == musics.length && (
              <div className={styles.new}>NEW</div>
            )}
          </div>
          <WorksNav></WorksNav>
        </div>
        <div className={styles.info}>
          <div className={styles.year}>{musicData.year}</div>
          <div className={styles.title}>{musicData.title1}</div>
          <div className={styles.title}>{musicData.title2}</div>
          <div className={styles.feat}>{musicData.feat}</div>
          <div className={styles.media}>
            <div>
              <a href="">
                <Image src={Imusic}></Image>
              </a>
            </div>
            <div>
              <a href="">
                <Image src={Spotify}></Image>
              </a>
            </div>
            <div>
              <a href="">
                <Image src={Kkbox}></Image>
              </a>
            </div>
          </div>
          <div className={styles.list}>1&nbsp;&nbsp;| 相片蒐集簿</div>
        </div>
      </div>
      <div className={styles.rightBlock}>
        {currentItems &&
          currentItems.map((music) => {
            return (
              <div key={music.id}>
                <a
                  onClick={() => {
                    let data = currentItems.filter((item) => {
                      return item.id == music.id;
                    });
                    setMusicData(data[0]);
                    setItemIndex(music.id);
                    console.log(data[0]);
                  }}
                >
                  <Image src={music.sImg}></Image>
                  {music.id == musics.length && (
                    <div className={styles.new}>NEW</div>
                  )}
                  <div className={styles.text}>
                    <div className={styles.year}>{music.year}</div>
                    <div className={styles.title}>{music.title1}</div>
                    <div className={styles.title}>{music.title2}</div>
                    <div className={styles.feat}>{music.feat}</div>
                  </div>
                </a>
              </div>
            );
          })}
      </div>
      <div className={styles.arrowUp}>
        <a
          onClick={() => {
            handlePagePrev();
          }}
        >
          <Image src={page > 0 ? AUA : AU}></Image>
        </a>
      </div>
      <div className={styles.arrowDown}>
        <a
          onClick={() => {
            handlePageNext();
          }}
        >
          <Image src={page < totalPage ? ADA : AD}></Image>
        </a>
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

export default Music;
