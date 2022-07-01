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
import IconM from "../assets/navbar/icon-m.svg";
import IconMText from "../assets/navbar/icon-m-text.svg";
import Menu from "../assets/navbar/menu.svg";
import Cross from "../assets/navbar/cross-m.svg";
import IMusicM from "../assets/navbar/imusic-m.svg";
import SpotifyM from "../assets/navbar/spotify-m.svg";
import KkboxM from "../assets/navbar/kkbox-m.svg";
import FacebookM from "../assets/navbar/facebook-m.svg";
import InstagramM from "../assets/navbar/instagram-m.svg";
import { Fragment, useEffect } from "react";

const Navbar = () => {
  const rmActive = () => {
    let link = document.querySelectorAll("div.navRight a");
    link.forEach((tab) => {
      tab.classList.remove("active");
    });
  };
  const router = useRouter();
  const { locale } = router;
  const t = locale === "zh" ? zh : en;
  const closeMenu = () => {
    document.getElementById("menuM").style.display = "none";
  };
  const openMenu = () => {
    document.getElementById("menuM").style.display = "block";
  };
  useEffect(() => {
    closeMenu();
  }, []);
  if (typeof window !== "undefined") {
    let link = document.querySelectorAll("div.navRight a");
    link.forEach((tab) => tab.addEventListener("click", toggleActiveTab));
    function toggleActiveTab(e) {
      link.forEach((tab) => {
        tab.classList.remove("active");
      });
      e.currentTarget.classList.toggle("active");
    }
    let menuLink = document.querySelectorAll("div#menuM a");
    menuLink.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }
  return (
    <Fragment>
      <nav className="nav1">
        <div className="iconBox" id="iconBox">
          <div>
            <Link href={"/"}>
              <a>
                <Image src={IconM} width={36} heigh={36}></Image>
              </a>
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <a>
                <Image src={IconMText} width={214} height={36}></Image>
              </a>
            </Link>
          </div>
          <div className="menu">
            <a onClick={openMenu}>
              <Image src={Menu} width={31} height={26}></Image>
            </a>
          </div>
        </div>
      </nav>
      <nav className="nav2">
        <div className="navLeft">
          <Link href="/">
            <a onClick={rmActive}>
              <div style={{ marginRight: "18px" }}>
                <Image src={Icon}></Image>
              </div>
            </a>
          </Link>
          <Link href={"/"}>
            <a onClick={rmActive}>
              <div>
                <Image src={IconName}></Image>
              </div>
            </a>
          </Link>

          <div className="media">
            <a
              href="https://music.apple.com/tw/artist/%E9%BB%83%E7%8E%A0/656689595"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={IMusic}></Image>
            </a>
            <a
              href="https://open.spotify.com/artist/3C8yUWotyLh2Kjkood3xYN?si=8mwMR0tuQGuufpNdrxSlbA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Spotify}></Image>
            </a>
            <a
              href="https://www.kkbox.com/tw/tc/artist/WsM__mTku7eU3VH0u1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Kkbox}></Image>
            </a>
            <a
              href="https://www.facebook.com/dadado.huang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Facebook}></Image>
            </a>
            <a
              href="https://www.instagram.com/dadadohuang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Instagram}></Image>
            </a>
          </div>
        </div>

        <div className="navRight">
          <div className="link">
            <Link href={"/news"}>
              <a>{t.news}</a>
            </Link>
            <Link href={"/about"}>
              <a>{t.about}</a>
            </Link>
            <Link href={"/works/music"}>
              <a>{t.work}</a>
            </Link>
            <Link href={"/special"}>
              <a>{t.special}</a>
            </Link>
            <Link href={"/dddParty"}>
              <a>{t.dadadohuang}</a>
            </Link>
          </div>
          <div className="official">
            <a
              href="https://shop.fantimate.com/pages/dadadohuang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={Store}></Image>
            </a>
            <Link style={{ marginLeft: "7px" }} className="email" href="/email">
              <a>
                <Image src={Email}></Image>
              </a>
            </Link>
          </div>
        </div>
      </nav>
      <div className="menuM" id="menuM">
        <div className="cross">
          <a onClick={closeMenu}>
            <Image src={Cross} width={60} height={60}></Image>
          </a>
        </div>
        <ul>
          <li>
            <Link href={"/news"}>
              <a>最新消息</a>
            </Link>
          </li>
          <li>
            <Link href={"/about"}>
              <a>關於</a>
            </Link>
          </li>
          <li>
            <Link href={"/works/music"}>
              <a>作品</a>
            </Link>
          </li>
          <li>
            <Link href={"/special"}>
              <a>專場</a>
            </Link>
          </li>
          <li>
            <Link href={"/dddParty"}>
              <a>黃玠國專區</a>
            </Link>
          </li>
        </ul>
        <div className="mediaM">
          <div>
            <a
              href="https://music.apple.com/tw/artist/%E9%BB%83%E7%8E%A0/656689595"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={IMusicM}></Image>
            </a>
          </div>
          <div>
            <a
              href="https://open.spotify.com/artist/3C8yUWotyLh2Kjkood3xYN?si=8mwMR0tuQGuufpNdrxSlbA"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={SpotifyM}></Image>
            </a>
          </div>
          <div>
            <a
              href="https://www.kkbox.com/tw/tc/artist/WsM__mTku7eU3VH0u1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={KkboxM}></Image>
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/dadado.huang"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={FacebookM}></Image>
            </a>
          </div>
          <div>
            <a
              href="https://www.instagram.com/dadadohuang/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={InstagramM}></Image>
            </a>
          </div>
        </div>
        <div className="contactM">
          <div>合作與工作邀約 請洽</div>
          <div>親愛的音樂 - dearmusik@gmail.com</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Navbar;
