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
import YouTube from "react-youtube";
import screenfull from "screenfull";
import getYouTubeID from "get-youtube-id";

const Mv = () => {
  const [isOpen, setOpen] = useState(false);
  const [currentMv, setCurrentMv] = useState(null);
  const [videoId, setVideoId] = useState("");
  const [play, setPlay] = useState(false);
  const [target, setTarget] = useState(null);
  const [id, setId] = useState("");
  const mvs = [
    {
      id: 1,
      title: "【我很想念你】官方 MV",
      youtube: "https://www.youtube.com/embed/7IZ0MVZL6RU",
      preview: M1,
    },
    {
      id: 2,
      title: "【你】官方 MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M2,
    },
    {
      id: 3,
      title: "【一路向東 feat.Suming舒米恩】官方 MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M3,
    },
    {
      id: 4,
      title: "【你是不是像我一樣 feat.黃小楨】官方 MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M4,
    },
    {
      id: 5,
      title: "【因為你 feat.女孩與機器人】官方 MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M5,
    },
    {
      id: 6,
      title: "【下雨的晚上】官方 MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M6,
    },
    {
      id: 7,
      title: "【Diana】官方 MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M7,
    },
    {
      id: 8,
      title: "【我可以】官方 MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M8,
    },
    {
      id: 9,
      title: "【夢的距離】官方 MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M9,
    },
  ];
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
    }
  }, []);

  // youtube播放事件
  const opts = {
    height: "0",
    width: "0",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 1,
      disablekb: 1,
      loop: 0,
      playsinline: 0,
      fs: 1,
      enablejsapi: 1,
    },
  };
  function fullScreen(e) {
    const iframe = e.target.i;
    if (screenfull.isEnabled && iframe) {
      screenfull.request(iframe);
    }
  }
  function playVideo(url) {
    // setCurrentMv(item);
    setId(url);
  }
  const _onReady = (event) => {
    // access to player in all event handlers via event.target
    setTarget(event);
    event.target.playVideo();
  };
  return (
    <>
      <div className={styles.container} id="mv">
        <Modal
          parentSelector={() => document.querySelector("#mv")}
          isOpen={isOpen}
          style={{
            overlay: {
              backdropFilter: "blur(11.3px)",
              backgroundColor: "rgba(0, 0, 0, 0.7)",
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
            src={currentMv && currentMv.youtube}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
            style={{ borderRadius: "30px" }}
          ></iframe>
        </Modal>

        <div className={styles.topic}>作品</div>
        <WorksNavM></WorksNavM>
        <div className={styles.avanav}>
          <div>
            <Image src={Avatar}></Image>
          </div>
          <WorksNav></WorksNav>
        </div>

        {id !== "" && (
          <YouTube
            videoId={id}
            opts={opts}
            onPlay={fullScreen}
            onReady={_onReady}
            id="youtubeM"
          />
        )}

        <div className={styles.rightBlock}>
          {mvs &&
            mvs.map((item) => {
              return (
                <div
                  key={item.id}
                  className={styles.musicBox}
                  id="mvItem"
                  onClick={() => {
                    const url = item.youtube.split("/").pop();
                    playVideo(url);
                  }}
                >
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
                  <div className={styles.play}></div>
                </div>
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
            <Image src={ADA}></Image>
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
