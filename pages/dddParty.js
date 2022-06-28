import styles from "../styles/Party.module.scss";
import Image from "next/image";
import Soon from "../assets/ddd-party/soon.svg";
import SoonM from "../assets/ddd-party/soon-m.svg";
import { useEffect, useState } from "react";

const DDDParty = () => {
  useEffect(() => {
    const footer = document.getElementById("footer");
    footer.style.backgroundColor = "transparent";

    return function cleanUp() {
      footer.style.backgroundColor = "#000";
    };
  }, []);
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
