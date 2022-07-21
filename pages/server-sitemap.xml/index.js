import { getServerSideSitemap } from "next-sitemap";

export const getServerSideProps = async (ctx) => {
  // const response = await fetch("https://dadadoking.com/news");
  const news = [1, 2, 3, 4];
  const fields = news.map((id) => ({
    loc: `https://dadadoking.com/news/${id}`,
    lastmod: new Date().toISOString(),
  }));

  return getServerSideSitemap(ctx, fields);
};

export default function Site() {}
