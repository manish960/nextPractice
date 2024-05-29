// pages/server-sitemap.xml/index.tsx
import { getServerSideSitemapLegacy } from "next-sitemap";
import { GetServerSideProps } from "next";
import axios from "axios";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  // Method to source urls from cms
  // const urls = await fetch('https//example.com/api')

  const Staticfields = [
    {
      loc: "https://example.com", // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
    {
      loc: "https://example.com/dynamic-path-2", // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    },
  ];

  let { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts`);

  const dynamicRoute = data?.map((item: any) => {
    return {
      loc: `${process.env.SITE_URL}/blog1/${item.id}`, // Absolute url
      lastmod: new Date().toISOString(),
      // changefreq
      // priority
    };
  });

  return getServerSideSitemapLegacy(ctx, [...Staticfields, ...dynamicRoute]);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
