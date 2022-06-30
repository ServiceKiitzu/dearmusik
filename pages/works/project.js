import styles from "../../styles/works/Project.module.scss";
import Image from "next/image";
import Head from "next/head";
import Avatar from "../../assets/works/project/project-avatar.jpg";
import { useRouter } from "next/router";
import zh from "../../locales/project/zh";
import en from "../../locales/project/en";
import WorksNav from "../../components/WorksNav";
import WorksNavM from "../../components/WorksNavM";
import Illustrator from "../../assets/works/project/illustrator.svg";
import Youtuber from "../../assets/works/project/youtuber.svg";
import Cooker from "../../assets/works/project/cooker.svg";
import Pocaster from "../../assets/works/project/pocaster.svg";
import Qone from "../../assets/works/project/question1.svg";
import Qtwo from "../../assets/works/project/question2.svg";
import IllustratorM from "../../assets/works/project/illustrator-m.svg";
import YoutuberM from "../../assets/works/project/youtuber-m.svg";
import CookerM from "../../assets/works/project/cooker-m.svg";
import PocasterM from "../../assets/works/project/pocaster-m.svg";
import QoneM from "../../assets/works/project/question1-m.svg";
import QtwoM from "../../assets/works/project/question2-m.svg";
import ImgM from "../../assets/works/project/img-m.svg";

const Project = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
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
      <div className={styles.container}>
        <div className={styles.topic}>作品</div>
        <WorksNavM></WorksNavM>
        <div className={styles.scrollBox}>
          <div className={styles.avatarBox}>
            <Image src={Avatar}></Image>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: t.text }}
            className={styles.text}
          ></div>
          <WorksNav></WorksNav>
          <div className={styles.imgBox}>
            <div>
              <Image src={Illustrator}></Image>
              {t.illustrator}
            </div>
            <div>
              <Image src={Youtuber}></Image>
              {t.youtuber}
            </div>
            <div>
              <Image src={Cooker}></Image>
              <div style={{ marginTop: "7px" }}>{t.cooker}</div>
            </div>
            <div>
              <Image src={Pocaster}></Image>
              {t.pocaster}
            </div>
            <div>
              <Image src={Qone}></Image>
              ______
            </div>
            <div>
              <Image src={Qtwo}></Image>
              ____
            </div>
          </div>
          <div className={styles.imgBoxM}>
            <div>
              <Image src={IllustratorM}></Image>
              <span>{t.illustrator}</span>
            </div>
            <div>
              <Image src={YoutuberM}></Image>
              {t.youtuber}
            </div>
            <div>
              <Image src={CookerM}></Image>
              <span>{t.cooker}</span>
            </div>
            <div>
              <Image src={PocasterM}></Image>
              {t.pocaster}
            </div>
            <div>
              <Image src={QoneM}></Image>
              <span>______</span>
            </div>
            <div>
              <Image src={QtwoM}></Image>
              ____
            </div>
          </div>
          <div className={styles.imgM}>
            <Image src={ImgM}></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
