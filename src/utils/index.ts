import { GraphQLClient } from "graphql-request"

export const createNodeJSGraphqlClient = (draftMode: boolean = false) => {
  const headers: HeadersInit = {
    Authorization: process.env.DATOCMS_GRAPHQL_TOKEN!,
    "X-Exclude-Invalid": "true"
  }

  if (draftMode) {
    headers["X-Include-Drafts"] = "true"
  }

  const client = new GraphQLClient(process.env.DATOCMS_GRAPHQL_URL!, {
    headers
  })

  return client
}
