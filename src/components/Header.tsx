import { NavLink } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import HamburgerMenu from "./HamburgerMenu"
import NavLinks from "./NavLinks"

type HeaderProps = {
  logoUrl: string
  navLinks: NavLink[]
  cvFileUrl?: string
}

function Header(props: HeaderProps) {
  return (
    <header className="sticky top-0 mx-auto flex h-24 w-full max-w-4xl items-center justify-between px-6 md:px-10">
      <Link href={"/"} className="z-20">
        <div className="rounded-2xl border-[1px] border-solid border-primary-600 p-[2px]">
          <Image
            src={props.logoUrl}
            alt="Description of the image"
            width={36}
            height={36}
            className="rounded-[14px]"
          />
        </div>
      </Link>
      <div className="flex items-center space-x-4">
        <nav className="hidden w-fit md:block">
          <NavLinks data={props.navLinks} />
        </nav>
        <div className="md:block">
          <Link
            href={""}
            className="hidden whitespace-nowrap bg-primary-600 px-5 py-3 text-sm font-bold text-neutral-100 no-underline md:block"
          >
            Download CV
          </Link>
        </div>
        <div className="flex items-center md:hidden">
          <HamburgerMenu navLinks={props.navLinks} />
        </div>
      </div>
    </header>
  )
}

export default Header
