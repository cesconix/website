import { GraphQLClient } from "graphql-request"

export const graphqlClient = new GraphQLClient(
  process.env.DATOCMS_GRAPHQL_URL!,
  {
    headers: {
      Authorization: process.env.DATOCMS_GRAPHQL_TOKEN!
    }
  }
)
