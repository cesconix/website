import type { NextApiRequest, NextApiResponse } from "next"
import { createNodeJSGraphqlClient } from "@/utils"

import { CurriculumUrlDocument } from "@/types/codegen/graphql"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createNodeJSGraphqlClient()

  const cvDoc = await client.request(CurriculumUrlDocument)
  const cvFile = cvDoc.common?.cvFile

  const response = await fetch(cvFile?.url!)
  const data = Buffer.from(await response.arrayBuffer())

  res.setHeader("Content-Type", cvFile?.mimeType!)
  res.setHeader("Content-Length", cvFile?.size!)
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${cvFile?.filename}`
  )

  res.status(200).send(data)
}
