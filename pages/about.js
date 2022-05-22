import Image from "next/image";
import Avatar from "../assets/about/avatar.png";
import Fish from "../assets/about/fish.svg";
import Text from "../assets/about/text.svg";
import styles from "../styles/About.module.scss";
import { useRouter } from "next/router";
import zh from "../locales/about/zh";
import en from "../locales/about/en";

const About = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  return (
    <div className={styles.container}>
      <div>
        <Image src={Avatar}></Image>
      </div>
      <div
        className={styles.story}
        dangerouslySetInnerHTML={{ __html: t.text }}
      ></div>

      <div className={styles.img}>
        <Image src={Fish}></Image>
      </div>
      <div className={styles.imgText}>
        <Image src={Text}></Image>
      </div>
    </div>
  );
};

export default About;
