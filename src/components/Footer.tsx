import React from "react"

type FooterProps = {}

function Footer(props: FooterProps) {
  return (
    <footer className="bg-neutral-600 text-sm text-foreground-700">
      <div className="container flex h-20 items-center">
        © 2023 Francesco Pasqua. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
