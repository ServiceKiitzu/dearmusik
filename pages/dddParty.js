import styles from "../styles/Party.module.scss";
import Image from "next/image";
import Soon from "../assets/ddd-party/soon.svg";
import SoonM from "../assets/ddd-party/soon-m.svg";

const DDDParty = () => {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <Image src={Soon}></Image>
      </div>
      <div className={styles.imgM}>
        <Image src={SoonM}></Image>
      </div>
      <div className={styles.block}></div>
    </div>
  );
};

export default DDDParty;
