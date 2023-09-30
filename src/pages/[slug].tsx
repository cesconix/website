import { ReactElement } from "react"
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { createNodeJSGraphqlClient } from "@/utils"

import {
  PageDocument,
  PageQuery,
  PagesSlugDocument
} from "@/types/codegen/graphql"
import { Layout } from "@/components/layout"
import { CustomStructuredText } from "@/components/ui"

export const getStaticPaths: GetStaticPaths = async () => {
  const client = createNodeJSGraphqlClient()
  const pagesSlug = await client.request(PagesSlugDocument)

  const paths = pagesSlug.allPages.map((page) => ({
    params: { slug: page.slug }
  }))

  return {
    paths,
    fallback: "blocking"
  }
}

type PageType = {
  pageQuery: PageQuery
  draftMode: boolean | null
}

export const getStaticProps: GetStaticProps<PageType> = async (context) => {
  const client = createNodeJSGraphqlClient(context.draftMode)

  const pageQuery = await client.request(PageDocument, {
    slug: context.params?.slug as string
  })

  return {
    props: {
      pageQuery,
      draftMode: context.draftMode || null
    },
    revalidate: 120
  }
}

const Page = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <>
      <Head>
        <title>{`${props.pageQuery.page?.title} | Francesco Pasqua`}</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-3xl px-6 md:px-10">
        <CustomStructuredText data={props.pageQuery.page?.content} />
      </main>
    </>
  )
}

Page.getLayout = function getLayout(page: ReactElement, pageProps: PageType) {
  return (
    <Layout
      draftMode={pageProps.draftMode!}
      commonProps={{
        logoUrl: pageProps.pageQuery.common?.logo.url!,
        navLinks: pageProps.pageQuery.allPages,
        cvFileUrl: pageProps.pageQuery.common?.cvFile?.url
      }}
    >
      {page}
    </Layout>
  )
}

export default Page
