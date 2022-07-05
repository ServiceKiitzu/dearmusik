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
      {/* Google Tag Manager */}
      <Script
        id="google-gtm"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WH93B9G');`,
        }}
      />
      <TypeContext.Provider value={{ type, setType }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </TypeContext.Provider>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WH93B9G"
height="0" width="0" style="display:none;visibility:hidden"></iframe>
`,
        }}
      ></noscript>
    </>
  );
}

export default MyApp;
