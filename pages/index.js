import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import zh from "../locales/index/zh";
import en from "../locales/index/en";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };
  return (
    <div className={styles.container}>
      <h1>{t.title}</h1>
      <select onChange={changeLanguage} defaultValue={locale}>
        <option value="zh">ZH</option>
        <option value="en">EN</option>
      </select>
    </div>
  );
}
