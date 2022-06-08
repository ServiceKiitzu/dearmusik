import Footer from "./Footer";
import Navbar from "./Navbar";
import Cookie from "./Cookie";
import Image from "next/image";
import StoreM from "../assets/index/store-m.svg";

const Layout = ({ children }) => {
  return (
    <div className="pageContainer">
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
