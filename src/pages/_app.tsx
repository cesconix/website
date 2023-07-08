import { useState } from "react"
import type { AppProps } from "next/app"
import { Space_Grotesk } from "next/font/google"
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space"
})

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <main
          className={`${spaceGrotesk.variable} min-h-screen bg-stone-900 font-sans text-2xl font-light text-stone-400`}
        >
          <Component {...pageProps} />
        </main>
      </Hydrate>
    </QueryClientProvider>
  )
}
