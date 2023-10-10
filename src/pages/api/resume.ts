import type { NextApiRequest, NextApiResponse } from "next"
import { createNodeJSGraphqlClient } from "@/utils"

import { CurriculumUrlDocument } from "@/types/codegen/graphql"

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const client = createNodeJSGraphqlClient()
  const cvDoc = await client.request(CurriculumUrlDocument)
  const cvUrl = cvDoc.common?.cvFile?.url!

  res.setHeader("Location", cvUrl)
  res.status(302).end()
}
