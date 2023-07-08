import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { HomePageQuery, useHomePageQuery } from "@/types/codegen"

import { graphqlClient } from "../utils"

export const getStaticProps: GetStaticProps<HomePageQuery> = async () => {
  const props = await useHomePageQuery.fetcher(graphqlClient)()

  return {
    props,
    revalidate: 10
  }
}

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Head>
        <title>Francesco Pasqua</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto">Hello!</main>
    </>
  )
}
