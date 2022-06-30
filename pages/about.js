import Image from "next/image";
import Head from "next/head";
import Avatar from "../assets/about/about-avatar.jpg";
import AvatarM from "../assets/about/about-avatar-m.png";
import Fish from "../assets/about/fish.svg";
import Text from "../assets/about/text.svg";
import FishM from "../assets/about/fish-m.svg";
import TextM from "../assets/about/text-m.svg";
import styles from "../styles/About.module.scss";
import { useRouter } from "next/router";
import zh from "../locales/about/zh";
import en from "../locales/about/en";
import { useEffect } from "react";
const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const square = entry.target;
        if (entry.isIntersecting) {
          square.classList.add(styles.animation);
          return; // if we added the class, exit the function
        }
        // We're not intersecting, so remove the class!
        square.classList.remove(styles.animation);
      });
    });
    const imgTextM = document.querySelector("#imgTextM");
    if (imgTextM) {
      observer.observe(document.querySelector("#imgTextM"));
    }
  }, []);
  return (
    <>
      <Head>
        <title>關於 ⎯ 黃玠 dadadohuang</title>
        <meta
          name="description"
          content="「我想用我的音樂改變世界」，黃玠以此為創作初衷
成為當代流行音樂中，能夠跨越時間篩選的創作男歌手之一"
        />
        <meta
          property="og:image"
          content="https://dearmusik.kiitzu.ninja/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog-img.e87c1000.jpg&w=1200&q=75"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.title}>關於</div>
        <div className={styles.avatar}>
          <Image src={Avatar}></Image>
        </div>
        <div className={styles.scrollBox}>
          <table></table>
          <div className={styles.avatarM}>
            <Image src={AvatarM}></Image>
          </div>
          <div
            className={styles.story}
            dangerouslySetInnerHTML={{ __html: t.text }}
          ></div>
          <div className={styles.imgBoxM}>
            <div className={styles.imgM}>
              <Image src={FishM}></Image>
            </div>
            <div className={styles.imgTextM} id="imgTextM">
              <Image src={TextM}></Image>
            </div>
          </div>
        </div>

        <div className={styles.img}>
          <Image src={Fish}></Image>
        </div>
        <div className={styles.imgText}>
          <Image src={Text}></Image>
        </div>
      </div>
    </>
  );
};

export default About;
