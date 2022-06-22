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
import S12 from "../../assets/works/music/S12.png";
import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

const Music = () => {
  const musics = [
    {
      id: 1,
      year: "2008",
      title1: "綠色的日子",
      title2: "",
      feat: "",
      sImg: S1,
      link: [
        "https://music.apple.com/tw/album/%E7%B6%A0%E8%89%B2%E7%9A%84%E6%97%A5%E5%AD%90-ep/893230062",
        "https://open.spotify.com/album/06NGQHBfbrFOGTV18UtWvY?si=qjNc2QrQSDyL8WP1Zp3sBw",
        "https://kkbox.fm/Ia020D",
      ],
      song: ["Dadadalada", "綠色的日子", "存在", "25歲", "做朋友", "香格里拉"],
    },
    {
      id: 2,
      year: "2010",
      title1: "我的高中同學",
      title2: "",
      feat: "",
      sImg: S2,
      link: [
        "https://music.apple.com/tw/album/%E6%88%91%E7%9A%84%E9%AB%98%E4%B8%AD%E5%90%8C%E5%AD%B8/1446584507",
        "https://open.spotify.com/album/3H7cyAVtrjPEuJQss7SQdv?si=hz2-aurJTI-mJiobSGHyAQ",
        "https://kkbox.fm/1a3pfd",
      ],
      song: [
        "我的高中同學",
        "今天星期幾",
        "夢的距離",
        "台北",
        "Balaba",
        "花蝴蝶",
        "最害羞的情感",
        "忘了",
        "拾荒地圖",
        "生活一堆毛",
        "我和你",
      ],
    },
    {
      id: 3,
      year: "2013",
      title1: "下雨的晚上",
      title2: "",
      feat: "",
      sImg: S3,
      link: [
        "https://music.apple.com/tw/album/%E4%B8%8B%E9%9B%A8%E7%9A%84%E6%99%9A%E4%B8%8A/767147817",
        "https://open.spotify.com/album/4zHBCvRy2ZJRmT25RCXAeS?si=YWlcj-HGSza6w-MyNdEz_w",
        "https://kkbox.fm/ja0Xn0",
      ],
      song: [
        "問題",
        "Diana",
        "下雨的晚上",
        "慢動作",
        "放個假",
        "一起跳舞",
        "我可以",
        "跟你出去玩",
        "如果連你都笑了",
        "流行歌",
        "全世界的人都很悲傷",
      ],
    },
    {
      id: 4,
      year: "2013",
      title1: "放個假",
      title2: "",
      feat: "(黃玠x蛋堡)",
      sImg: S4,
      link: [
        "https://music.apple.com/tw/album/%E6%94%BE%E5%80%8B%E5%81%87-single/767256272",
        "https://open.spotify.com/album/3xeN769subv05HMxjAov3v?si=tMTakj6ASLalQCdZsQY8sw",
        "https://kkbox.fm/ja0bih",
      ],
      song: ["放個假(vs. 蛋堡)", "少年維持著煩惱"],
    },
    {
      id: 5,
      year: "2014",
      title1: "大自然的力量",
      title2: "",
      feat: "",
      sImg: S5,
      link: [
        "https://music.apple.com/tw/album/%E5%A4%A7%E8%87%AA%E7%84%B6%E7%9A%84%E5%8A%9B%E9%87%8F-feat-%E5%A5%B3%E5%AD%A9%E8%88%87%E6%A9%9F%E5%99%A8%E4%BA%BA-%E8%88%92%E7%B1%B3%E6%81%A9-%E9%BB%83%E5%B0%8F%E6%A5%A8-ep/941950340",
        "https://open.spotify.com/album/1hqK5A4XwIoErBuVdZRraI?si=5IsATupFQvWtFG6_X5G40g",
        "https://kkbox.fm/Oa0j1Z",
      ],
      song: [
        "因為你 (vs. 女孩與機器人)",
        "一路向東 (vs. Suming 舒米恩)",
        "你是不是像我一樣 (vs. 黃小楨)",
        "寂寞殺死我 (vs. 黃小楨)",
        "旅途 (vs. Suming 舒米恩)",
        "跟蹤 (vs. 女孩與機器人)",
      ],
    },
    {
      id: 6,
      year: "2015",
      title1: "十年熟成精選輯",
      title2: "",
      feat: "(黃玠xNabowa)",
      sImg: S6,
      link: [
        "https://music.apple.com/tw/album/%E5%8D%81%E5%B9%B4%E7%86%9F%E6%88%90%E7%B2%BE%E9%81%B8%E8%BC%AF-single/1054708532",
        "https://open.spotify.com/album/16ylvovloECoZcalxPfDz6?si=pCh_UFL1Sfi5L2Xn4u9P1A",
        "https://kkbox.fm/ia0tTLL",
      ],
      song: [
        "她的生活 (Diana's Weekend) (feat. 黃玠)",
        "Giant's Walking (Ramen Version) (feat. 黃玠)",
      ],
    },
    {
      id: 7,
      year: "2016",
      title1: "一片黑暗之中",
      title2: "",
      feat: "",
      sImg: S7,
      link: [
        "https://music.apple.com/tw/album/%E5%9C%A8%E4%B8%80%E7%89%87%E9%BB%91%E6%9A%97%E4%B9%8B%E4%B8%AD/1118852031",
        "https://open.spotify.com/album/6YeIHLRFUzowPDBf7YTp03?si=CrihMeSUSSaekMWDdQpQEQ",
        "https://kkbox.fm/5a17Kd",
      ],
      song: [
        "在一片黑暗之中",
        "關於那些記得的事",
        "走吧",
        "你",
        "她的生活",
        "當...",
        "我很想念你",
        "不必哀怨",
        "Party 到天亮",
        "脆弱",
      ],
    },
    {
      id: 8,
      year: "2017",
      title1: "我們",
      title2: "",
      feat: "",
      sImg: S8,
      link: [
        "https://music.apple.com/tw/album/%E6%88%91%E5%80%91-single/1224781969",
        "https://open.spotify.com/album/6xnNRHxqenbEuY7a4sDbfR?si=8R51uPlpSCOb2j9XHdIcjA",
        "https://kkbox.fm/fa1uCR",
      ],
      song: ["我們"],
    },
    {
      id: 9,
      year: "2017",
      title1: "海邊情歌",
      title2: "",
      feat: "",
      sImg: S9,
      link: [
        "https://music.apple.com/tw/album/%E6%B5%B7%E9%82%8A%E6%83%85%E6%AD%8C-single/1253861390",
        "https://open.spotify.com/album/2mAIB8iEJyfDvPrxnSrCw8?si=xzUR_byPSYqOWq8eyXoOoA",
        "https://kkbox.fm/pa1S4c",
      ],
      song: ["海邊情歌"],
    },
    {
      id: 10,
      year: "2017",
      title1: "相片蒐集簿",
      title2: "",
      feat: "",
      sImg: S10,
      link: [
        "https://music.apple.com/tw/album/%E7%9B%B8%E7%89%87%E8%92%90%E9%9B%86%E7%B0%BF-single/1317671947",
        "https://open.spotify.com/album/2yq3To9A4mOGPljfffeOLy?si=EGnEsqclRG2ZxC4-99NTPw",
        "https://kkbox.fm/3a2IsW",
      ],
      song: ["相片蒐集簿"],
    },
    {
      id: 11,
      year: "2019",
      title1: "激膚—",
      title2: "像月亮的人",
      feat: "(feat. 黃玠)",
      sImg: S11,
      link: [
        "https://music.apple.com/tw/album/%E5%83%8F%E6%9C%88%E4%BA%AE%E7%9A%84%E4%BA%BA/1464645329?i=1464645338",
        "https://open.spotify.com/track/2XFyo3PL3JnR0cr5eVgKq6?si=9f801b45cb864042",
        "https://kkbox.fm/KsUBLD?utm_source=share&utm_medium=song&utm_campaign=%E6%BF%80%E8%86%9A%E6%A8%82%E5%9C%98+%28My+Skin+Against+Your+Skin%29+-+%E5%83%8F%E6%9C%88%E4%BA%AE%E7%9A%84%E4%BA%BA+%28+feat.%E9%BB%83%E7%8E%A0+%29+%28Can%E2%80%99t+sleep+%28+feat.Dadado+Huang+%29%29",
      ],
      song: ["像月亮的人"],
    },
    {
      id: 12,
      year: "2021",
      title1: "PUZZLEMAN——",
      title2: "打打多多",
      feat: "(feat. 黃玠)",
      sImg: S12,
      link: [
        "https://music.apple.com/tw/album/%E6%89%93%E6%89%93%E5%A4%9A%E5%A4%9A-feat-%E9%BB%83%E7%8E%A0/1558991144?i=1558991162",
        "https://open.spotify.com/track/0x8999C3GJtJk2UmEdV3SV?si=7a211628c4964ac5",
        "https://kkbox.fm/Wsln03?utm_source=share&utm_medium=song&utm_campaign=PUZZLEMAN+-+%E6%89%93%E6%89%93%E5%A4%9A%E5%A4%9A+feat.+%E9%BB%83%E7%8E%A0",
      ],
      song: ["打打多多"],
    },
  ];
  const [page, setPage] = useState(0);
  const count = 9;
  const [currentItems, setCurrentItems] = useState(null);
  const [itemOffset, setItemOffset] = useState(0);
  const [musicData, setMusicData] = useState(musics[musics.length - 1]);
  const [itemIndex, setItemIndex] = useState(musics.length);

  const [innerPage, setInnerPage] = useState(false);
  const [isMobile, setIsMobile] = useState(0);

  const musicReverse = [...musics].reverse();
  let totalPage = Math.ceil(musicReverse.length / count) - 1;
  useEffect(() => {
    // Fetch items from another resources.
    const endOffset = itemOffset + count;
    setCurrentItems(musicReverse.slice(itemOffset, endOffset));
  }, [itemOffset]);

  // 分頁前後切換
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

  // 內頁開關
  const switchInnerPage = () => {
    setInnerPage(true);
  };
  useEffect(() => {
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
      {innerPage && (
        <div className={styles.innerPage} id="innerPage">
          <div className={styles.inText1}>
            <div
              className={`${styles.previous} `}
              onClick={() => {
                setInnerPage(false);
              }}
            ></div>
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
              <a href={musicData.link[0]}>
                <div className={styles.imusicM}></div>
              </a>
              <a href={musicData.link[1]}>
                <div className={styles.spotifyM}></div>
              </a>
              <a href={musicData.link[2]}>
                <div className={styles.kkboxM}></div>
              </a>
            </div>
            <div className={styles.listM}>
              {musicData.song &&
                musicData.song.map((song, i) => {
                  return (
                    <div key={i}>
                      <div className={styles.number}>
                        {i + 1 < 10 ? `${i + 1}` : i + 1}
                      </div>
                      | {song}
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      )}

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
                <a href={musicData.link[0]}>
                  <Image src={Imusic}></Image>
                </a>
              </div>
              <div>
                <a href={musicData.link[1]}>
                  <Image src={Spotify}></Image>
                </a>
              </div>
              <div>
                <a href={musicData.link[2]}>
                  <Image src={Kkbox}></Image>
                </a>
              </div>
            </div>
            <div className={styles.list}>
              {musicData.song &&
                musicData.song.map((song, i) => {
                  return (
                    <div key={i}>
                      <div className={styles.number}>
                        {i + 1 < 10 ? `0${i + 1}` : i + 1}
                      </div>
                      | {song}
                    </div>
                  );
                })}
            </div>
            <div
              className={`${styles.sImgM} innerGear`}
              onClick={() => {
                setMusicData(musics[musics.length - 1]);
                switchInnerPage();
              }}
            >
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
                    <div className={styles.previewImg} onClick={() => {}}>
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
                    className="innerGear"
                  >
                    <div className={styles.previewImg}>
                      <Image src={music.sImg}></Image>
                    </div>
                  </a>
                </div>
              );
            })}
        </div>
        <div className={styles.imgM}></div>
        <div className={styles.imgTextM} id="imgTextM"></div>
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
