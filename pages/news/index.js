import styles from "../../styles/news/News.module.scss";
import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import NewsNave from "../../components/NewsNav";
import Img from "../../assets/news/img.svg";
import ImgText from "../../assets/news/img-text.svg";
import ImgM from "../../assets/news/img-m.svg";
import ImgTextM from "../../assets/news/img-text-m.svg";
import AU from "../../assets/works/music/arrow-up.svg";
import AUA from "../../assets/works/music/arrow-up-active.svg";
import AD from "../../assets/works/music/arrow-down.svg";
import ADA from "../../assets/works/music/arrow-down-active.svg";
import { useEffect, useState } from "react";
import { handleBreakpoints } from "@mui/system";

const News = () => {
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
  return (
    <>
      <Head>
        <title>最新消息 ⎯ 黃玠 dadadohuang</title>
        <meta
          name="description"
          content="集結精選文章，深入瞭解黃玠的第一手消息"
        />
        <meta
          property="og:image"
          content="https://dearmusik.kiitzu.ninja/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog-img.e87c1000.jpg&w=1200&q=75"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.topic}>最新消息</div>
        <NewsNave></NewsNave>
        <div className={styles.articleList}>
          <Link href={"/news/" + 1}>
            <div className={styles.listItem}>
              <div className={styles.date}>20220530</div>
              <div className={styles.title}>今年，25歲</div>
              <div className={styles.content}>
                世界上有一些大家都知道的微行國家，像梵蒂岡、新加坡等。但其實還有比這些更小的“私人國家”存在，國家的面積也許只是一個足球場，一小片屋聚，一棟房或一間臥室一一一一一一一一一一一
                <div className={styles.read}>.......【繼續閱讀】</div>
              </div>
              <div className={styles.readM}>.......【繼續閱讀】</div>
            </div>
          </Link>

          <div className={styles.listItem}>
            <div className={styles.date}>20220430</div>
            <div className={styles.title}>
              歡迎加入黃玠國! 黃玠國裡，都是喜歡自由跟充滿愛的國人
            </div>
            <div className={styles.content}>
              世界上有一些大家都知道的微行國家，像梵蒂岡、新加坡等。但其實還有比這些更小的“私人國家”存在，國家的面積也許只是一個足球場，一小片屋聚，一棟房或一間臥室
              <div className={styles.read}>.......【繼續閱讀】</div>
            </div>
            <div className={styles.readM}>.......【繼續閱讀】</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.date}>20220330</div>
            <div className={styles.title}>下雨的夜晚</div>
            <div className={styles.content}>
              世界上有一些大家都知道的微行國家，像梵蒂岡、新加坡等。但其實還有比這些更小的“私人國家”存在，國家的面積也許只是一個足球場，一小片屋聚，一棟房或一間臥室一一一一一一一一一一一
              <div className={styles.read}>.......【繼續閱讀】</div>
            </div>
            <div className={styles.readM}>.......【繼續閱讀】</div>
          </div>
          <div className={styles.listItem}>
            <div className={styles.date}>20220130</div>
            <div className={styles.title}>黃玠國國王</div>
            <div className={styles.content}>
              世界上有一些大家都知道的微行國家，像梵蒂岡、新加坡等。但其實還有比這些更小的“私人國家”存在，國家的面積也許只是一個足球場，一小片屋聚，一棟房或一間臥室一一一一一一一一一一一
              <div className={styles.read}>.......【繼續閱讀】</div>
            </div>
            <div className={styles.readM}>.......【繼續閱讀】</div>
          </div>
          <div className={styles.imgTextM} id="imgTextM"></div>
          <div className={styles.imgM}></div>
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
        <div className={styles.imgText} id="imgText">
          <Image src={ImgText}></Image>
        </div>
      </div>
    </>
  );
};

export default News;
