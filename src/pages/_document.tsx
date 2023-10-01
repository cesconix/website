import { Head, Html, Main, NextScript } from "next/document"

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-neutral-700 text-foreground-200 antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
