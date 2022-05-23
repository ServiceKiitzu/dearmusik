import styles from "../styles/Email.module.scss";

import Image from "next/image";
import Img from "../assets/email/img.svg";
import ImgText from "../assets/email/img-text.svg";
import { useRouter } from "next/router";
import zh from "../locales/email/zh";
import en from "../locales/email/en";

const Email = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  return (
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
  );
};

export default Email;
