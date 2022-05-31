import styles from "../../styles/news/News.module.scss";
import Image from "next/image";
import Link from "next/link";
import NewsNave from "../../components/NewsNav";
import Img from "../../assets/news/img.svg";
import ImgText from "../../assets/news/img-text.svg";
import AU from "../../assets/works/music/arrow-up.svg";
import AUA from "../../assets/works/music/arrow-up-active.svg";
import AD from "../../assets/works/music/arrow-down.svg";
import ADA from "../../assets/works/music/arrow-down-active.svg";
import { useEffect, useState } from "react";
import { handleBreakpoints } from "@mui/system";

const News = () => {
  return (
    <div className={styles.container}>
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
        </div>
        <div className={styles.listItem}>
          <div className={styles.date}>20220330</div>
          <div className={styles.title}>下雨的夜晚</div>
          <div className={styles.content}>
            世界上有一些大家都知道的微行國家，像梵蒂岡、新加坡等。但其實還有比這些更小的“私人國家”存在，國家的面積也許只是一個足球場，一小片屋聚，一棟房或一間臥室一一一一一一一一一一一
            <div className={styles.read}>.......【繼續閱讀】</div>
          </div>
        </div>
        <div className={styles.listItem}>
          <div className={styles.date}>20220130</div>
          <div className={styles.title}>黃玠國國王</div>
          <div className={styles.content}>
            世界上有一些大家都知道的微行國家，像梵蒂岡、新加坡等。但其實還有比這些更小的“私人國家”存在，國家的面積也許只是一個足球場，一小片屋聚，一棟房或一間臥室一一一一一一一一一一一
            <div className={styles.read}>.......【繼續閱讀】</div>
          </div>
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
  );
};

export default News;
