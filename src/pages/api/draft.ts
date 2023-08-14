import { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.setDraftMode({ enable: true })
  res.redirect(req.query.slug as string)
}
