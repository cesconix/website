import React from "react"

type FooterProps = {}

function Footer(props: FooterProps) {
  return (
    <footer className="mx-auto flex h-24 w-full max-w-4xl items-center justify-between border-t border-t-neutral-500 px-6 text-sm text-foreground-700 md:px-10">
      © 2023 Francesco Pasqua. All rights reserved.
    </footer>
  )
}

export default Footer
