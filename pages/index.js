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

import I1 from "../assets/index/swipe-1.jpg";
import I2 from "../assets/index/swipe-2.jpg";
import I3 from "../assets/index/swipe-3.jpg";
import I4 from "../assets/index/swipe-4.jpg";
import I5 from "../assets/index/swipe-5.jpg";
import M1 from "../assets/index/swipe-m-1.jpg";
import M2 from "../assets/index/swipe-m-2.jpg";
import M3 from "../assets/index/swipe-m-3.jpg";
import M4 from "../assets/index/swipe-m-4.jpg";
import M5 from "../assets/index/swipe-m-5.jpg";
import StoreM from "../assets/index/store-m.svg";
import LArrow from "../assets/index/left_arrow.svg";
import RArrow from "../assets/index/right_arrow.svg";
import { CarouselItem } from "react-bootstrap";

export default function Home() {
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  const changeLanguage = (e) => {
    const locale = e.target.value;
    router.push("/", "/", { locale });
  };
  const carousel = [I1, I2, I3, I4, I5];
  const carouselM = [M1, M2, M3, M4, M5];
  return (
    <>
      <div className={styles.mask}></div>
      <div className={styles.containerM}>
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
          {carouselM &&
            carouselM.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div>
                    <Image src={item}></Image>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
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
          {carousel &&
            carousel.map((item, i) => {
              return (
                <SwiperSlide key={i}>
                  <div>
                    <Image src={item}></Image>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
