// import "normalize.css/normalize.css";
import "../styles/globals.scss";
import Layout from "../components/Layout";
import "@fontsource/roboto-slab";
import "@fontsource/noto-sans-tc";
import { useEffect, useState } from "react";
import Head from "next/head";
import Script from "next/script";
import TypeContext from "../context/TypeContext";

function MyApp({ Component, pageProps }) {
  const [type, setType] = useState("全部");
  return (
    <>
      <TypeContext.Provider value={{ type, setType }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TypeContext.Provider>
    </>
  );
}

export default MyApp;
