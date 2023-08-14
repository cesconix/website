import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { PageQuery } from "@/types/codegen"
import { Layout } from "@/components/layout"

export default function App({
  Component,
  pageProps
}: AppProps<{ pageQuery: PageQuery; draftMode: boolean }>) {
  return (
    <Layout
      draftMode={pageProps.draftMode}
      commonProps={{
        logoUrl: pageProps.pageQuery?.common?.logo.url as string,
        navLinks: pageProps.pageQuery?.allPages,
        cvFileUrl: pageProps.pageQuery?.common?.cvFile?.url
      }}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
