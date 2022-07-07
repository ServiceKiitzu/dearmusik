import NewsNave from "../../components/NewsNav";
import styles from "../../styles/news/Details.module.scss";
import Image from "next/image";
import Link from "next/link";
import Previous from "../../assets/news/previous.svg";
import Head from "next/head";
import Img from "../../assets/news/img.svg";
import ImgText from "../../assets/news/img-text.svg";
import { useEffect } from "react";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

const Details = () => {
  const router = useRouter();
  const [detail, setDetail] = useState(null);
  useEffect(() => {
    const nav = document.getElementById("type");
    let widthNow = window.innerWidth;
    if (widthNow < 1280) {
      nav.style.display = "none";
    }
  }, []);
  useEffect(() => {
    if (router.isReady) {
      const articles = JSON.parse(sessionStorage.getItem("articles"));
      let result = articles.filter((item) => item.id == router.query.id);
      const filterResult = result[0];
      setDetail(filterResult);
    }
  }, [router.isReady]);
  return (
    <>
      <Head>
        <title>{detail && detail.title}</title>
        <meta name="description" content={detail && detail.preview} />
        <meta
          property="og:image"
          content="https://dearmusik.kiitzu.ninja/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog-img.e87c1000.jpg&w=1200&q=75"
        />
      </Head>
      <div className={styles.container}>
        <NewsNave></NewsNave>
        <div className={styles.topic}>最新消息</div>
        {
          <div className={styles.rightBlock}>
            <Link href={"/news"}>
              <div className={styles.previous}>
                <Image src={Previous}></Image>
              </div>
            </Link>

            <div className={styles.date}>
              <div
                className={styles.previousM}
                onClick={() => {
                  router.back();
                }}
              ></div>
              {detail && detail.date}
            </div>
            {detail && (
              <>
                <div className={styles.title}>{detail.title}</div>
                <div
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: detail.content }}
                ></div>
              </>
            )}
          </div>
        }
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

export default Details;
