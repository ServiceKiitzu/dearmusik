import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import zh from "../locales/navbar/zh";
import en from "../locales/navbar/en";

import Icon from "../assets/navbar/icon.svg";
import IconName from "../assets/navbar/icon-name.svg";
import Email from "../assets/navbar/email.svg";
import Store from "../assets/navbar/store.svg";
import IMusic from "../assets/navbar/imusic.svg";
import Kkbox from "../assets/navbar/kkbox.svg";
import Facebook from "../assets/navbar/facebook.svg";
import Instagram from "../assets/navbar/instagram.svg";
import Spotify from "../assets/navbar/spotify.svg";

const Navbar = () => {
  if (typeof window !== "undefined") {
    let link = document.querySelectorAll("div.navRight a");
    link.forEach((tab) => tab.addEventListener("click", toggleActiveTab));
    function toggleActiveTab(e) {
      link.forEach((tab) => {
        tab.classList.remove("active");
      });
      e.currentTarget.classList.toggle("active");
    }
  }

  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  return (
    <nav>
      <div className="navLeft">
        <Link href="/">
          <a>
            <div style={{ marginRight: "18px" }}>
              <Image src={Icon}></Image>
            </div>
          </a>
        </Link>
        <Link href={"/"}>
          <a>
            <div>
              <Image src={IconName}></Image>
            </div>
          </a>
        </Link>

        <div className="media">
          <a href="">
            <Image src={IMusic}></Image>
          </a>
          <a href="">
            <Image src={Spotify}></Image>
          </a>
          <a href="">
            <Image src={Kkbox}></Image>
          </a>
          <a href="">
            <Image src={Facebook}></Image>
          </a>
          <a href="">
            <Image src={Instagram}></Image>
          </a>
        </div>
      </div>

      <div className="navRight">
        <div className="link">
          <Link href={""}>
            <a>{t.news}</a>
          </Link>
          <Link href={"/about"}>
            <a>{t.about}</a>
          </Link>
          <Link href={""}>
            <a>{t.work}</a>
          </Link>
          <Link href={""}>
            <a>{t.special}</a>
          </Link>
          <Link href={"/dddParty"}>
            <a>{t.dadadohuang}</a>
          </Link>
        </div>
        <div className="official">
          <a href="">
            <Image src={Store}></Image>
          </a>
          <Link style={{ marginLeft: "7px" }} className="email" href="">
            <a>
              <Image src={Email}></Image>
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
