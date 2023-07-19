import fs from "fs"
import path from "path"

import type { NextApiRequest, NextApiResponse } from "next"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const filePath = path.resolve(process.cwd(), "src", "bin", "resume.sh")
    const bashScript = fs.readFileSync(filePath, "utf-8")
    res.setHeader("Content-Type", "text/plain")
    res.send(bashScript)
  } catch (err) {
    res.status(500).send(err)
  }
}
