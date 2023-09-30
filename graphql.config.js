require("dotenv").config()

module.exports = {
  overwrite: true,
  schema: {
    [process.env.DATOCMS_GRAPHQL_URL]: {
      headers: {
        Authorization: process.env.DATOCMS_GRAPHQL_TOKEN,
        "X-Exclude-Invalid": true
      }
    }
  },
  documents: ["./src/**/*.gql"],
  ignoreNoDocuments: true,
  generates: {
    "./src/types/codegen/": {
      preset: "client",
      presetConfig: {
        fragmentMasking: false
      },
      config: {
        useIndexSignature: true,
        strictScalars: true,
        scalars: {
          BooleanType: "boolean",
          CustomData: "Record<string, string>",
          Date: "string",
          DateTime: "string",
          FloatType: "number",
          IntType: "number",
          ItemId: "string",
          JsonField: "unknown",
          MetaTagAttributes: "Record<string, string>",
          UploadId: "string"
        }
      }
    }
  }
}
