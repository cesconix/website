import { NavLink } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { MenuButton, NavLinks } from "@/components/ui"

type HeaderProps = {
  logoUrl: string
  navLinks: NavLink[]
  cvFileUrl?: string
}

function Header(props: HeaderProps) {
  const [lastScrollPos, setLastScrollPos] = useState(0)
  const [showNav, setShowNav] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY
      const isScrollingUp = lastScrollPos > currentScrollPos

      if (isScrollingUp || currentScrollPos < 10) {
        setShowNav(true)
      } else {
        setShowNav(false)
      }

      setLastScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollPos])

  return (
    <header
      className={`sticky top-0 mx-auto flex h-24 w-full  items-center justify-between px-6 transition-transform duration-300 md:px-10 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
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
