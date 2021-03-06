import Footer from "./Footer";
import Navbar from "./Navbar";
import Cookie from "./Cookie";
import Image from "next/image";
import StoreM from "../assets/index/store-m.svg";
import Head from "next/head";
import { useEffect, useState, createContext } from "react";

const Layout = ({ children }) => {
  return (
    <div className="pageContainer" id="pageContainer">
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <div className="content">{children}</div>
      <Cookie></Cookie>
      <Footer></Footer>
      {process.env.NEXT_PUBLIC_STORE == "true" && (
        <div className="storeM">
          <a
            href="https://shop.fantimate.com/pages/dadadohuang"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image src={StoreM}></Image>
          </a>
        </div>
      )}
    </div>
  );
};

export default Layout;
