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
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>
      <TypeContext.Provider value={{ type, setType }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TypeContext.Provider>
    </>
  );
}

export default MyApp;
