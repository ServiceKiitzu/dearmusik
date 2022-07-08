import styles from "../styles/Email.module.scss";
import Head from "next/head";
import Image from "next/image";
import Img from "../assets/email/img.svg";
import ImgText from "../assets/email/img-text.svg";
import { useRouter } from "next/router";
import zh from "../locales/email/zh";
import en from "../locales/email/en";
import { useEffect } from "react";

const Email = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  useEffect(() => {
    if (window.innerWidth < 1280) {
      router.push("/");
    }
  }, []);
  return (
    <>
      <Head>
        <title>聯絡資訊 ⎯ 黃玠 dadadohuang</title>
        <meta
          name="description"
          content="合作與工作邀約，歡迎來信！
                    dearmusik@gmail.com"
        />
        <meta
          property="og:image"
          content="https://dearmusik.kiitzu.ninja/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fog-img.e87c1000.jpg&w=1200&q=75"
        />
      </Head>
      <div className={styles.container}>
        <table></table>
        <div className={styles.img}>
          <Image src={Img}></Image>
        </div>
        <div className={styles.imgText}>
          <Image src={ImgText}></Image>
        </div>
        <div className={styles.contact}>
          {t.title}
          <div className={styles.email}>dearmusik@gmail.com</div>
        </div>
      </div>
    </>
  );
};

export default Email;
