import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { PageQuery } from "@/types/codegen"
import { Layout } from "@/components/layout"

export default function App({ Component, pageProps }: AppProps<PageQuery>) {
  return (
    <Layout
      commonProps={{
        logoUrl: pageProps.common?.logo.url as string,
        navLinks: pageProps.allPages,
        cvFileUrl: pageProps.common?.cvFile?.url
      }}
    >
      <Component {...pageProps} />
    </Layout>
  )
}
