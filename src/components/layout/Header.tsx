import React, { useMemo } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"
import { NavLinkType } from "@/types"

import { MenuButton, NavLinks } from "@/components/ui"

type HeaderProps = {
  logoUrl: string
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
      className={`sticky top-0 mx-auto flex h-24 w-full  items-center justify-between px-6 transition-transform duration-300 md:px-10`}
    >
      <Link href={"/home"} className="z-20">
        <div className="rounded-2xl border-[1px] border-solid border-primary-600 p-[2px]">
          <Image
            src={props.logoUrl}
            alt="Francesco Pasqua website logo"
            width={36}
            height={36}
            className="rounded-[14px]"
          />
        </div>
      </Link>
      <div className="md:hidden font-bold z-20">
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
          <MenuButton navLinks={props.navLinks} />
        </div>
      </div>
    </header>
  )
}

export default Header
