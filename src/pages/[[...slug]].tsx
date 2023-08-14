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

export const getStaticProps: GetStaticProps<PageQuery> = async (context) => {
  const graphqlClient = createGraphqlClient(context.draftMode)

  const page = await usePageQuery.fetcher(graphqlClient, {
    slug: { eq: context.params!.slug?.at(0) as string }
  })()

  return {
    props: page,
    revalidate: 120
  }
}

export default function Page(
  props: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <Head>
        <title>{props.page?.title} | Francesco Pasqua</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="mx-auto max-w-3xl px-6 md:px-10">
        <CustomStructuredText data={props.page?.content} />
        {/*<div className="w-full columns-2 gap-4 md:columns-3">
          {props.homePage?.gallery.map((image, index) => {
            const isShort =
              index % 6 === 0 || index % 6 === 3 || index % 6 === 4
            return (
              <div
                className={`relative mb-4 ${isShort ? "h-40" : "h-80"}`}
                key={index}
              >
                <Image
                  src={image.url}
                  fill
                  priority
                  alt="Description of the image"
                  className="rounded-lg object-cover"
                  sizes="(max-width: 768px) 213px, 33vw"
                />
              </div>
            )
          })}
        </div>*/}
      </main>
    </>
  )
}
