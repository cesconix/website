import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { PageQuery, useAllSlugsQuery, usePageQuery } from "@/types/codegen"
import { CustomStructuredText } from "@/components/ui"
import { createGraphqlClient } from "@/utils"

export const getStaticPaths: GetStaticPaths = async () => {
  const graphqlClient = createGraphqlClient()

  const { allPages } = await useAllSlugsQuery.fetcher(graphqlClient)()

  const paths = allPages.map((page) => ({
    params: { slug: page.slug === "home" ? [] : [page.slug] }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

export const getStaticProps: GetStaticProps<{
  pageQuery: PageQuery
  draftMode?: boolean | null
}> = async (context) => {
  const graphqlClient = createGraphqlClient(context.draftMode)

  const page = await usePageQuery.fetcher(graphqlClient, {
    slug: { eq: context.params!.slug?.at(0) as string }
  })()

  return {
    props: {
      pageQuery: page,
      draftMode: context.draftMode || null
    },
    revalidate: 120
  }
}

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Head>
        <title>{props.pageQuery?.page?.title} | Francesco Pasqua</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-3xl px-6 md:px-10">
        <CustomStructuredText data={props.pageQuery?.page?.content} />
      </main>
    </>
  )
}
