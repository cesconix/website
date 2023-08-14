import { GraphQLClient } from "graphql-request"
import { GraphQLClientRequestHeaders } from "graphql-request/build/esm/types"

export const createGraphqlClient = (draftMode: boolean = false) => {
  const headers: GraphQLClientRequestHeaders = {
    Authorization: process.env.DATOCMS_GRAPHQL_TOKEN!
  }

  if (draftMode) {
    headers["X-Include-Drafts"] = "true"
  }

  console.log(headers)

  const client = new GraphQLClient(process.env.DATOCMS_GRAPHQL_URL!, {
    headers
  })

  return client
}
