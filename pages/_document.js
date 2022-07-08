import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

const Document = () => {
  return (
    <Html lang="zh">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: process.env.GTM_SCRIPT,
          }}
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Google Tag Manager */}
        <noscript
          dangerouslySetInnerHTML={{
            __html: process.env.GTM_NO_SCRIPT,
          }}
        ></noscript>
      </body>
    </Html>
  );
};

export default Document;
