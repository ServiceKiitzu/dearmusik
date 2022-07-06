import styles from "../styles/Party.module.scss";
import Image from "next/image";
import Head from "next/head";
import Soon from "../assets/ddd-party/soon.svg";
import SoonM from "../assets/ddd-party/soon-m.svg";
import { useEffect, useState } from "react";

const DDDParty = () => {
  useEffect(() => {
    if (window.innerWidth < 1280) {
      const footer = document.getElementById("footer");
      footer.style.backgroundColor = "transparent";
    }

    return function cleanUp() {
      if (window.innerWidth < 1280) {
        footer.style.backgroundColor = "#000";
      }
    };
  }, []);
  return (
    <>
      <Head>
        <title>黃玠國專區 ⎯ 黃玠 dadadohuang</title>
        <meta
          name="description"
          content="歡迎加入黃玠國！
黃玠國裡，都是喜歡自由跟充滿愛的國人"
        />
        <meta
          property="og:image"
          content="https://dearmusik.kiitzu.ninja/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog-img.e87c1000.jpg&w=1200&q=75"
        />
      </Head>
      <div className={styles.container}>
        <div className={styles.img}>
          <Image src={Soon}></Image>
        </div>
        <div className={styles.blackBlock}></div>

        <div className={styles.block}>
          <div className={styles.imgM}>
            <Image src={SoonM}></Image>
          </div>
        </div>
      </div>
    </>
  );
};

export default DDDParty;
