import React, { useEffect, useMemo } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import { NavLinkType } from "@/types"

import { ResponsiveImage, SocialLinkFragment } from "@/types/codegen/graphql"
import { Logo, MenuButton, NavLinks } from "@/components/common"

export type HeaderProps = {
  logo: ResponsiveImage
  navLinks: NavLinkType[]
  cvFileUrl?: string
  socials: SocialLinkFragment[]
}

function Header(props: HeaderProps) {
  const router = useRouter()

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const currentIndex = props.navLinks.findIndex(
        (link) => `/${link.slug}` === router.asPath
      )

      let newIndex = currentIndex

      switch (event.key) {
        case "ArrowRight":
          newIndex = (currentIndex + 1) % props.navLinks.length
          break
        case "ArrowLeft":
          newIndex =
            currentIndex - 1 < 0 ? props.navLinks.length - 1 : currentIndex - 1
          break
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
          newIndex = Number(event.key)
      }

      if (newIndex !== currentIndex) {
        router.push(props.navLinks[newIndex].slug)
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [props.navLinks, router.asPath])

  const activeNavLink = useMemo(() => {
    return props.navLinks.find(
      (navLink) => `/${navLink.slug}` === router.asPath
    )
  }, [props.navLinks, router.asPath])

  const isHome = activeNavLink?.title === "Home"

  return (
    <header
      className={`mx-auto flex h-24 w-full items-center justify-between px-6 transition-transform duration-300 md:px-10`}
    >
      <div className="relative">
        <Link href={"/home"}>
          <Logo logo={props.logo} active={isHome} />
        </Link>
        {isHome ? (
          <div className="hidden absolute w-full md:flex justify-center -bottom-3">
            <div className="bg-foreground-200 w-1 h-1 rounded" />
          </div>
        ) : null}
      </div>
      <div className="md:hidden font-bold">
        {activeNavLink?.title ?? "Home"}
      </div>
      <nav className="hidden w-fit md:block">
        <NavLinks data={props.navLinks} />
      </nav>
      <div className="flex items-center space-x-4">
        <div className="md:block">
          <Link
            target="_blank"
            href={props.cvFileUrl!}
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
