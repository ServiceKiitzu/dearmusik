// pages/sitemap.xml.js
import { getServerSideSitemap } from "next-sitemap";
import { otherLanguages } from "config/i18nConfig";
export const getServerSideProps = async (ctx) => {
  const response = await fetch("https://dadadoking.com");
  const paths = await response.json();
  const fields = paths.data.map(({ path }) => {
    const alternateRefs = otherLanguages.map((language) => {
      let href = "https://dadadoking.com" + language + path;
      if (language === "en") {
        href = "https://dadadoking.com" + path;
      }
      return {
        href,
        hreflang: [...otherLanguages],
      };
    });
    return {
      loc: "https://dadadoking.com" + path,
      alternateRefs,
      lastmod: new Date().toISOString(),
    };
  });
  return getServerSideSitemap(ctx, fields);
};
export default () => {};
