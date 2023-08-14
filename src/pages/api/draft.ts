import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.query.secret !== process.env.SECRET_TOKEN || !req.query.slug) {
    return res.status(401).json({ message: "invalid  token" })
  }

  // Enable Draft Mode by setting the cookie
  res.setDraftMode({ enable: true })

  res.redirect(req.query.slug as string)
}
