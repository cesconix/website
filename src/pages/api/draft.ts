import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.SECRET_TOKEN || !req.query.slug) {
    return res.status(401).json({ message: "invalid token" })
  }

  res.setDraftMode({ enable: !!req.query.enable })

  res.redirect(req.query.slug as string)
}
