import Image from "next/image";
import Avatar from "../assets/about/avatar.png";
import AvatarM from "../assets/about/avatar-m.png";
import Fish from "../assets/about/fish.svg";
import Text from "../assets/about/text.svg";
import FishM from "../assets/about/fish-m.svg";
import TextM from "../assets/about/text-m.svg";
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
      <div className={styles.title}>關於</div>
      <div className={styles.avatar}>
        <Image src={Avatar}></Image>
      </div>
      <div className={styles.avatarM}>
        <Image src={AvatarM}></Image>
      </div>
      <div
        className={styles.story}
        dangerouslySetInnerHTML={{ __html: t.text }}
      ></div>
      <div className={styles.imgM}>
        <Image src={FishM}></Image>
      </div>
      <div className={styles.imgTextM}>
        <Image src={TextM}></Image>
      </div>
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
