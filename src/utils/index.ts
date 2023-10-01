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

export const formatDate = (dateString: string) => {
  const date = new Date(dateString)
  const formatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric"
  })
  return formatter.format(date)
}

export const getMonthDifference = (date1: string, date2: string) => {
  const startDate = new Date(date1)
  const endDate = new Date(date2)
  const yearsDifference = endDate.getFullYear() - startDate.getFullYear()
  const monthsDifference = endDate.getMonth() - startDate.getMonth()
  const totalMonths = yearsDifference * 12 + monthsDifference

  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12

  let differenceString = ""
  if (years > 0) {
    differenceString += `${years} yr${years > 1 ? "s" : ""} `
  }

  if (months > 0) {
    differenceString += `${months} mo${months > 1 ? "s" : ""}`
  }

  return differenceString.trim()
}
