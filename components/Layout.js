import Footer from "./Footer";
import Navbar from "./Navbar";
import Cookie from "./Cookie";
import Image from "next/image";
import StoreM from "../assets/index/store-m.svg";
import Head from "next/head";

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
      <div className="storeM">
        <Image src={StoreM}></Image>
      </div>
    </div>
  );
};

export default Layout;
