import WorksNav from "../../components/WorksNav";
import WorksNavM from "../../components/WorksNavM";
import styles from "../../styles/works/Mv.module.scss";
import Image from "next/image";
import Close from "../../assets/works/mv/cross.svg";
import Modal from "react-modal/lib/components/Modal";
import Avatar from "../../assets/works/mv/mv-avatar.jpg";
import Img from "../../assets/works/mv/img.svg";
import ImgText from "../../assets/works/mv/img-text.svg";
import AU from "../../assets/works/music/arrow-up.svg";
import AUA from "../../assets/works/music/arrow-up-active.svg";
import AD from "../../assets/works/music/arrow-down.svg";
import ADA from "../../assets/works/music/arrow-down-active.svg";
import M1 from "../../assets/works/mv/m1.png";
import M2 from "../../assets/works/mv/m2.png";
import M3 from "../../assets/works/mv/m3.png";
import M4 from "../../assets/works/mv/m4.png";
import M5 from "../../assets/works/mv/m5.png";
import M6 from "../../assets/works/mv/m6.png";
import M7 from "../../assets/works/mv/m7.png";
import M8 from "../../assets/works/mv/m8.png";
import M9 from "../../assets/works/mv/m9.png";
import { useState, useEffect } from "react";
import Script from "next/script";
import Head from "next/head";
import YouTube from "react-youtube";
import screenfull from "screenfull";
import { Fragment } from "react";
import ReactPlayer from "react-player";

const Mv = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentMv, setCurrentMv] = useState(null);
  const [YTListMobile, setYTListMobile] = useState([]);
  const [phone, setPhone] = useState(false);
  let mvs = [
    {
      id: 1,
      title: "【夢的距離】官方 MV",
      youtube: "SIR5UFuOfKw",
      preview: M1,
    },
    {
      id: 2,
      title: "【我可以】官方 MV",
      youtube: "iQr2PqLMZbw",
      preview: M2,
    },
    {
      id: 3,
      title: "【Diana】官方 MV",
      youtube: "dzRRla6ekl0",
      preview: M3,
    },
    {
      id: 4,
      title: "【下雨的晚上】官方 MV",
      youtube: "966IuoVHU7I",
      preview: M4,
    },
    {
      id: 5,
      title: "【因為你 feat.女孩與機器人】官方 MV",
      youtube: "rBQlyMO_ZxM",
      preview: M5,
    },
    {
      id: 6,
      title: "【你是不是像我一樣 feat.黃小楨】官方 MV",
      youtube: "RFJ5YEhNhIQ",
      preview: M6,
    },
    {
      id: 7,
      title: "【一路向東 feat.Suming舒米恩】官方 MV",
      youtube: "a-MFnayF5TE",
      preview: M7,
    },
    {
      id: 8,
      title: "【你】官方 MV",
      youtube: "lCBUKVaTUbU",
      preview: M8,
    },
    {
      id: 9,
      title: "【我很想念你】官方 MV",
      youtube: "j5oXfkAEbqw",
      preview: M9,
    },
  ];
  mvs = mvs.reverse();
  if (typeof window !== "undefined") {
    Modal.setAppElement(document.getElementById("mv"));
  }

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
      setPhone(true);
    }
    if (window.innerWidth < 1280) {
      setPhone(true);
    }
  }, []);

  // youtube播放事件
  function storeMobileYoutube(e, index) {
    // store all mobile video value
    YTListMobile[index] = e;
    setYTListMobile([...YTListMobile], e);
  }
  function playMobileVideo(index) {
    YTListMobile[index].target.playVideo();
    if (screenfull.isEnabled) {
      screenfull.request(YTListMobile[index].target.getIframe());
      screenfull.on("change", () => {
        if (!screenfull.isFullscreen) {
          YTListMobile[index].target.pauseVideo();
        }
      });
    }
  }
  useEffect(() => {
    if (screenfull.isFullscreen) {
      YTListMobile.forEach((item) => {
        item.target.pauseVideo();
      });
    }
  }, [screenfull.isFullscreen]);
  // function fullScreen(e) {
  //   const iframe = e.target.getIframe();
  //   if (screenfull.isEnabled) {
  //     screenfull.request(iframe);
  //     screenfull.onchange(() => {
  //       console.log(screenfull.isFullscreen ? "是" : "否");
  //     });
  //   }
  // }
  return (
    <>
      <Head>
        <title>作品 ⎯ 黃玠 dadadohuang</title>
        <meta
          name="description"
          content="歷年作品，從音樂、MV到退休專案，帶你感受黃玠的魅力"
        />
        <meta
          property="og:image"
          content="https://dearmusik.kiitzu.ninja/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog-img.e87c1000.jpg&w=1200&q=75"
        />
      </Head>
      <div className={styles.container} id="mv">
        {!phone && (
          <Modal
            parentSelector={() => document.querySelector("#mv")}
            isOpen={isOpen}
            style={{
              overlay: {
                backdropFilter: "blur(11.3px)",
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                zIndex: "3",
              },
              content: {
                transform: "translateX(-50%)",
                border: "none",
                padding: "0",
                inset: "0",
                width: "966px",
                height: "462px",
                backgroundColor: "transparent",
                overflow: "unset",
              },
            }}
          >
            <div className={styles.close}>
              <a
                onClick={() => {
                  setOpen(false);
                }}
              >
                <Image src={Close}></Image>
              </a>
            </div>
            <iframe
              id="videoBox"
              width="100%"
              height="100%"
              src={
                currentMv &&
                `https://www.youtube.com/embed/${currentMv.youtube}`
              }
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen={true}
              style={{ borderRadius: "30px" }}
            ></iframe>
          </Modal>
        )}
        <div className={styles.topic}>作品</div>
        <WorksNavM></WorksNavM>
        <div className={styles.avanav}>
          <div>
            <Image src={Avatar}></Image>
          </div>
          <WorksNav></WorksNav>
        </div>

        <div className={styles.rightBlock}>
          {/* mv預覽小圖 */}
          {mvs &&
            mvs.map((item, index) => {
              return (
                <Fragment key={index}>
                  <div
                    key={item.id}
                    className={styles.musicBox}
                    id="mvItem"
                    onClick={() => {
                      if (phone) {
                        playMobileVideo(index);
                      } else {
                        setCurrentMv(item);
                        setOpen(true);
                      }
                    }}
                  >
                    {item.id == mvs.length && phone && (
                      <div className={styles.new}></div>
                    )}

                    <Image src={item.preview}></Image>
                    <div className={styles.title}>{item.title}</div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      className={`svg-triangle ${styles.triangle}`}
                      width="44"
                      height="53"
                    >
                      <path d="M 40,25 4,45 4,5 z" />
                    </svg>
                    {phone && item.youtube && (
                      <YouTube
                        videoId={item.youtube}
                        opts={{
                          width: "100%",
                          height: "100%",
                          playerVars: {
                            disablekb: 1,
                            loop: 0,
                            playsinline: 0,
                            rel: 0,
                            fs: 1,
                          },
                        }}
                        onReady={(e) => {
                          storeMobileYoutube(e, index);
                        }}
                        key={index}
                        className={styles.phonePlayer}
                      />
                    )}
                    {YTListMobile[index] !== null && (
                      <div className={styles.play}></div>
                    )}
                  </div>
                </Fragment>
              );
            })}
          <div className={styles.imgBox}>
            <div className={styles.imgTextM} id="imgTextM"></div>
            <div className={styles.imgM}></div>
          </div>
        </div>
        <div className={styles.arrowBox}>
          <div>
            <Image src={AU}></Image>
          </div>
          <div>
            <Image src={mvs.length > 9 ? ADA : AD}></Image>
          </div>
        </div>
        <div className={styles.img}>
          <Image src={Img}></Image>
        </div>
        <div className={styles.imgText}>
          <Image src={ImgText}></Image>
        </div>
      </div>
    </>
  );
};

export default Mv;
