import Footer from "./Footer";
import Navbar from "./Navbar";
import Cookie from "./Cookie";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="content">{children}</div>
      <Cookie></Cookie>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
