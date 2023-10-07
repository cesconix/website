import type { GetServerSideProps } from "next"
import { createNodeJSGraphqlClient } from "@/utils"

import { PagesSlugDocument } from "@/types/codegen/graphql"

const EXTERNAL_DATA_URL = process.env.BASE_URL || "http://localhost:3000"

type UrlEntry = {
  slug: string
  lastmod: string
}

function generateSiteMap(entries: UrlEntry[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${entries
       .map((entry) => {
         return `
       <url>
         <loc>${`${EXTERNAL_DATA_URL}/${entry.slug}`}</loc>
         <lastmod>${entry.lastmod}</lastmod>
       </url>
     `
       })
       .join("")}
   </urlset>
 `
}

function SiteMap() {}

export const getServerSideProps = (async (context) => {
  const client = createNodeJSGraphqlClient()
  const pagesSlug = await client.request(PagesSlugDocument)

  const urlEntries: UrlEntry[] = pagesSlug.allPages.map((page) => ({
    slug: page.slug === "home" ? "" : page.slug,
    lastmod: page._publishedAt!
  }))

  const sitemap = generateSiteMap(urlEntries)

  context.res.setHeader("Content-Type", "text/xml")
  context.res.write(sitemap)
  context.res.end()

  return {
    props: {}
  }
}) satisfies GetServerSideProps

export default SiteMap
