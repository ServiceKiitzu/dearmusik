import WorksNav from "../../components/WorksNav";
import WorksNavM from "../../components/WorksNavM";
import Imusic from "../../assets/works/music/imusic.svg";
import Spotify from "../../assets/works/music/spotify.svg";
import Kkbox from "../../assets/works/music/kkbox.svg";
import ImgText from "../../assets/works/music/img-text.svg";
import Img from "../../assets/works/music/img.svg";
import Image from "next/image";
import styles from "../../styles/works/Music.module.scss";
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
import Modal from "react-bootstrap/Modal";

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
      title1: "安卓雅—",
      title2: "像月亮的人",
      feat: "feat.黃玠",
      sImg: S10,
    },
    {
      id: 11,
      year: "2021",
      title1: "PUZZLEMAN—",
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

  const [innerPage, setInnerPage] = useState(0);
  const [isMobile, setIsMobile] = useState(0);

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
  const switchInnerPage = () => {
    const innerPageBlock = document.getElementById("innerPage");
    const container = document.getElementById("container");
    if (innerPage) {
      setInnerPage(0);
      innerPageBlock.style.display = "none";
      container.style.height = "100%";
      return;
    }
    setInnerPage(1);
    innerPageBlock.style.display = "block";
    container.style.height = "100vh";
    container.style.overflowY = "hidden";
  };
  useEffect(() => {
    console.log(currentItems);
    const mediaQuery = window.matchMedia("( max-width: 1280px )");
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
    if (mediaQuery.matches) {
      observer.observe(document.querySelector("#imgTextM"));
      setIsMobile(1);
    }
  }, []);
  return (
    <div className={styles.container} id="container">
      <div className={styles.innerPage} id="innerPage">
        <div className={styles.inText1}>
          <div className={styles.previous} onClick={switchInnerPage}></div>
          2022 SINGLE
        </div>
        <div className={styles.scrollBox1}>
          <div className={styles.sImgM}>
            <Image src={musicData.sImg}></Image>
          </div>
          <div className={styles.inText2}>十年熟成</div>
          <div className={styles.inText2}>最佳精選特輯</div>
          <div className={styles.inText3}>黃玠×NABOWA</div>
          <div className={styles.mediaM}>
            <div className={styles.imusicM}></div>
            <div className={styles.spotifyM}></div>
            <div className={styles.kkboxM}></div>
          </div>
          <div className={styles.listM}>
            <div>
              <div className={styles.number}>1</div>| 相片蒐集簿
            </div>
            <div>
              <div className={styles.number}>2</div>| 在一片黑暗
            </div>
            <div>
              <div className={styles.number}>3</div>| 關於那些記得
            </div>
            <div>
              <div className={styles.number}>4</div>| 你
            </div>
            <div>
              <div className={styles.number}>5</div>| 相片蒐集簿
            </div>
            <div>
              <div className={styles.number}>6</div>| 相片蒐集簿
            </div>
            <div>
              <div className={styles.number}>7</div>| Party到天亮，相片蒐集簿
            </div>
            <div>
              <div className={styles.number}>8</div>| 脆弱
            </div>
            <div>
              <div className={styles.number}>9</div>| 我
            </div>
            <div>
              <div className={styles.number}>10</div>| 相片蒐集簿
            </div>
          </div>
        </div>
      </div>

      <div className={styles.topic}>作品</div>
      <WorksNavM></WorksNavM>
      <div className={styles.scrollBox2}>
        <div className={styles.leftBlock}>
          <div className={styles.box1}>
            <div className={styles.sImg}>
              <Image src={musicData.sImg}></Image>
              {itemIndex == musics.length && (
                <div className={styles.new}>NEW</div>
              )}
            </div>
            <WorksNav></WorksNav>
          </div>
          <div className={styles.info}>
            <div className={styles.year}>
              {isMobile ? musics[musics.length - 1].year : musicData.year}
            </div>
            <div className={styles.title}>
              {isMobile ? musics[musics.length - 1].title1 : musicData.title1}
            </div>
            <div className={styles.title}>
              {isMobile ? musics[musics.length - 1].title2 : musicData.title2}
            </div>
            <div className={styles.feat}>
              {isMobile ? musics[musics.length - 1].feat : musicData.feat}
            </div>
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
            <div className={styles.list}>
              <div>
                <div className={styles.number}>1</div>| 相片蒐集簿
              </div>
              <div>
                <div className={styles.number}>2</div>| 在一片黑暗
              </div>
              <div>
                <div className={styles.number}>3</div>| 關於那些記得
              </div>
              <div>
                <div className={styles.number}>4</div>| 你
              </div>
              <div>
                <div className={styles.number}>5</div>| 相片蒐集簿
              </div>
              <div>
                <div className={styles.number}>6</div>| 相片蒐集簿
              </div>
              <div>
                <div className={styles.number}>7</div>| 相片蒐集簿
              </div>
              <div>
                <div className={styles.number}>8</div>| 脆弱
              </div>
              <div>
                <div className={styles.number}>9</div>| 我
              </div>
              <div>
                <div className={styles.number}>10</div>| 相片蒐集簿
              </div>
            </div>
            <div className={styles.sImgM} onClick={switchInnerPage}>
              <Image src={musics[musics.length - 1].sImg}></Image>
            </div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          {currentItems &&
            isMobile == 0 &&
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
                    }}
                  >
                    <div className={styles.previewImg}>
                      <Image src={music.sImg}></Image>
                    </div>
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
          {musicReverse &&
            isMobile &&
            musicReverse.shift() &&
            musicReverse.map((music) => {
              return (
                <div key={music.id}>
                  <a
                    onClick={() => {
                      setMusicData(music);
                      setItemIndex(music.id);
                      switchInnerPage();
                    }}
                  >
                    <div className={styles.previewImg}>
                      <Image src={music.sImg}></Image>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
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
      <div className={styles.imgM}></div>
      <div className={styles.imgTextM} id="imgTextM"></div>
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
