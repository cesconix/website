import { NextApiRequest, NextApiResponse } from "next"
import Cors from "cors"

const cors = Cors()

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

  if (req.method === "OPTIONS") {
    return res.status(200).send("ok")
  }

  const slug = req.body.item?.attributes?.slug
  const baseUrl = process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`

  if (!slug || !baseUrl) {
    return res.status(200).json({ previewLinks: [] })
  }

  const previewLinks = [
    {
      label: "Published version",
      url: `${baseUrl}/api/draft?enable=false&slug=/${slug}&secret=${process.env.SECRET_TOKEN}`
    },
    {
      label: "Draft version",
      url: `${baseUrl}/api/draft?enable=true&slug=/${slug}&secret=${process.env.SECRET_TOKEN}`
    }
  ]

  return res.status(200).json({ previewLinks })
}
