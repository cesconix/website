import { NextApiRequest, NextApiResponse } from "next"
import Cors from "cors"

const cors = Cors({
  origin: "*",
  methods: ["POST"],
  allowedHeaders: ["Content-Type", "Authorization"]
})

function runMiddleware(
  req: NextApiRequest,
  res: NextApiResponse,
  fn: Function
) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await runMiddleware(req, res, cors)

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
