import { GetStaticProps } from "next"
import Head from "next/head"
import { HomePageQuery, useHomePageQuery } from "@/types/codegen"

import { graphqlClient } from "@/utils"

export const getStaticProps: GetStaticProps<HomePageQuery> = async () => {
  const props = await useHomePageQuery.fetcher(graphqlClient)()

  return {
    props,
    revalidate: 10
  }
}

export default function Page() {
  return (
    <>
      <Head>
        <title>cesco.me</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto flex min-h-[calc(100dvh-96px)] max-w-4xl px-6 md:px-10">
        About
      </main>
    </>
  )
}
