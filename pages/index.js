import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.scss";
import { useRouter } from "next/router";
import zh from "../locales/index/zh";
import en from "../locales/index/en";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { Navigation, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import I1 from "../assets/index/swipe_1.png";
import I2 from "../assets/index/test1.webp";
import I3 from "../assets/index/test2.jpg";
import LArrow from "../assets/index/left_arrow.svg";
import RArrow from "../assets/index/right_arrow.svg";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };

  return (
    <>
      <div className={styles.container}>
        <Swiper
          modules={[Autoplay, Navigation, EffectFade]}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          effect={"fade"}
          navigation={{
            nextEl: ".next-img",
            prevEl: ".prev-img",
          }}
        >
          <div className={`${styles.p} prev-img`}>
            <Image src={LArrow}></Image>
          </div>
          <div className={`${styles.n} next-img`}>
            <Image src={RArrow}></Image>
          </div>
          <SwiperSlide>
            <div>
              <Image src={I1}></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={I2}></Image>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <Image src={I3}></Image>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
}
