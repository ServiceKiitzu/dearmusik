// pages/sitemap.xml.js
import { getServerSideSitemap } from "next-sitemap";
export const getServerSideProps = async (ctx) => {
  const response = await fetch("https://dadadoking.com");
  const paths = await response.json();
  const fields = paths.data.map(({ path }) => {
    return {
      loc: "https://dadadoking.com" + path,
      lastmod: new Date().toISOString(),
    };
  });
  return getServerSideSitemap(ctx, fields);
};
export default () => {};
