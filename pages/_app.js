// import "normalize.css/normalize.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import "@fontsource/roboto-slab";
import "@fontsource/noto-sans-tc";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
