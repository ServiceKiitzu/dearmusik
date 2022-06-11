import WorksNav from "../../components/WorksNav";
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
import { useState } from "react";

const Mv = () => {
  const [isOpen, setOpen] = useState(false);
  const mvs = [
    {
      id: 1,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M1,
    },
    {
      id: 2,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M2,
    },
    {
      id: 3,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M3,
    },
    {
      id: 4,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M4,
    },
    {
      id: 5,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M5,
    },
    {
      id: 6,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M6,
    },
    {
      id: 7,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M7,
    },
    {
      id: 8,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M8,
    },
    {
      id: 9,
      title: "黃玠-在一片黑暗之中MV",
      youtube: "https://www.youtube.com/embed/aR8BSYCvbvo",
      preview: M9,
    },
  ];
  if (typeof window !== "undefined") {
    Modal.setAppElement(document.getElementById("mv"));
  }
  return (
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
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/aR8BSYCvbvo"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen={true}
          style={{ borderRadius: "30px" }}
        ></iframe>
      </Modal>
      <div>
        <div>
          <Image src={Avatar}></Image>
        </div>
        <WorksNav></WorksNav>
      </div>
      <div className={styles.rightBlock}>
        {mvs &&
          mvs.map((item) => {
            return (
              <div key={item.id} className={styles.musicBox}>
                <Image src={item.preview}></Image>
                <a
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  <div className={styles.title}>黃玠-在一片黑暗之中MV</div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    version="1.1"
                    className="svg-triangle"
                    width="44"
                    height="53"
                  >
                    <path d="M 40,25 4,45 4,5 z" />
                  </svg>
                </a>
              </div>
            );
          })}
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
  );
};

export default Mv;
