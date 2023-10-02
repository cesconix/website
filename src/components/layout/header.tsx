import React, { useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { NavLinkType } from "@/types"

import { ResponsiveImage } from "@/types/codegen/graphql"
import { Logo, MenuButton, NavLinks } from "@/components/common"

export type HeaderProps = {
  logo: ResponsiveImage
  navLinks: NavLinkType[]
  cvFileUrl?: string
}

function Header(props: HeaderProps) {
  const { asPath } = useRouter()

  const activeNavLink = useMemo(() => {
    return props.navLinks.find((navLink) => `/${navLink.slug}` === asPath)
  }, [props.navLinks])

  return (
    <header
      className={`mx-auto flex h-24 w-full items-center justify-between px-6 transition-transform duration-300 md:px-10`}
    >
      <Link href={"/home"}>
        <Logo logo={props.logo} />
      </Link>
      <div className="md:hidden font-bold">
        {activeNavLink?.title ?? "Home"}
      </div>
      <nav className="hidden w-fit md:block">
        <NavLinks data={props.navLinks} />
      </nav>
      <div className="flex items-center space-x-4">
        <div className="md:block">
          <Link
            href={""}
            className="hidden whitespace-nowrap bg-primary-600 px-5 py-3 text-sm font-bold text-neutral-100 no-underline md:block"
          >
            Download CV
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <MenuButton {...props} />
        </div>
      </div>
    </header>
  )
}

export default Header
