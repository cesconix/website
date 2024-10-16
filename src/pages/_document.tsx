import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <script
          defer
          data-domain="cesco.me"
          src="https://plausible.io/js/script.js"
        ></script>
      </Head>
      <body className="bg-neutral-700 text-foreground-200 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
