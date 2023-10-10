import type { GetServerSideProps } from "next"
import { createNodeJSGraphqlClient } from "@/utils"

import { PagesSlugDocument } from "@/types/codegen/graphql"

type UrlEntry = {
  location: string
  lastmod: string
}

function generateSiteMap(entries: UrlEntry[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     ${entries
       .map((entry) => {
         return `
       <url>
         <loc>${entry.location}</loc>
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

  const urlEntries: UrlEntry[] = pagesSlug.allPages.map((page) => {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000"
        : `https://${context.req.headers.host}`

    return {
      location:
        page.slug === "home" ? `${baseUrl}/` : `${baseUrl}/${page.slug}`,
      lastmod: page._publishedAt!
    }
  })

  const sitemap = generateSiteMap(urlEntries)

  context.res.setHeader("Content-Type", "text/xml")
  context.res.write(sitemap)
  context.res.end()

  return {
    props: {}
  }
}) satisfies GetServerSideProps

export default SiteMap
