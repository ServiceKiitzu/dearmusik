import styles from "../../styles/works/Project.module.scss";
import Image from "next/image";
import Avatar from "../../assets/works/project/avatar.svg";
import { useRouter } from "next/router";
import zh from "../../locales/project/zh";
import en from "../../locales/project/en";
import WorksNav from "../../components/WorksNav";
import Illustrator from "../../assets/works/project/illustrator.svg";
import Youtuber from "../../assets/works/project/youtuber.svg";
import Cooker from "../../assets/works/project/cooker.svg";
import Pocaster from "../../assets/works/project/pocaster.svg";
import Qone from "../../assets/works/project/question1.svg";
import Qtwo from "../../assets/works/project/question2.svg";

const Project = () => {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  return (
    <div className={styles.container}>
      <div className={styles.avatarBox}>
        <Image src={Avatar}></Image>
      </div>
      <div
        dangerouslySetInnerHTML={{ __html: t.text }}
        className={styles.text}
      ></div>
      <WorksNav></WorksNav>
      <div className={styles.imgBox}>
        <div>
          <Image src={Illustrator}></Image>
          {t.illustrator}
        </div>
        <div>
          <Image src={Youtuber}></Image>
          {t.youtuber}
        </div>
        <div>
          <Image src={Cooker}></Image>
          <div style={{ marginTop: "7px" }}>{t.cooker}</div>
        </div>
        <div>
          <Image src={Pocaster}></Image>
          {t.pocaster}
        </div>
        <div>
          <Image src={Qone}></Image>
          ______
        </div>
        <div>
          <Image src={Qtwo}></Image>
          ____
        </div>
      </div>
    </div>
  );
};

export default Project;
