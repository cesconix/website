import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*")
  res.setHeader("Access-Control-Allow-Methods", "POST")
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization")
  res.setHeader("Content-Type", "application/json")
  res.setHeader(
    "Content-Security-Policy",
    "frame-ancestors 'self' https://plugins-cdn.datocms.com;"
  )

  if (req.method === "OPTIONS") {
    return res.status(200).send("ok")
  }

  const { slug } = req.body.item?.attributes
  const baseUrl = process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`

  if (!slug || !baseUrl) {
    return res.status(200).json({ previewLinks: [] })
  }

  const previewLinks = [
    {
      label: "Published version",
      url: `${baseUrl}${slug}`
    },
    {
      label: "Draft version",
      url: `${baseUrl}/api/draft?slug=${slug}`
    }
  ]

  return res.status(200).json({ previewLinks })
}
