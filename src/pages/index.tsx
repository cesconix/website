import { GetStaticProps, InferGetStaticPropsType } from "next"
import Head from "next/head"
import { HomePageQuery, useHomePageQuery } from "@/types/codegen"

import { graphqlClient } from "@/utils"
import { WhoAmI } from "@/components"
import Image from "next/image"

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
      <main className="mx-auto flex min-h-[calc(100dvh-96px)] max-w-4xl items-center px-6 md:px-10">
        <div className="">
          <WhoAmI
            welcome={props.homePage?.welcome as string}
            fullname={props.homePage?.fullname as string}
            tagline={props.homePage?.tagline as string}
            shortBio={props.homePage?.shortBio as string}
            socialLinks={props.common?.socialLinks!}
          />
        </div>
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
