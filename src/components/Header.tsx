import { NavLink } from "@/types"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { usePathname } from "next/navigation"
import { clsx } from "clsx"

type HeaderProps = {
  logoUrl: string
  navLinks: NavLink[]
  cvFileUrl?: string
}

function Header(props: HeaderProps) {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 mx-auto flex h-24 w-full max-w-4xl items-center justify-between px-6 md:px-10">
      <Link href={"/"}>
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
          <ul className="flex items-center tracking-normal">
            {props.navLinks?.map((navLink, index) => {
              const isActive = `/${navLink.slug}` === pathname
              return (
                <li key={navLink.slug}>
                  <Link
                    key={navLink.slug}
                    href={navLink.slug}
                    className={clsx(
                      "mx-1 flex items-center p-3 text-sm text-foreground-600 no-underline hover:text-foreground-100",
                      { "text-foreground-100": isActive }
                    )}
                  >
                    <div className="mr-2 text-xs text-primary-600">
                      {(index + 1).toString().padStart(2, "0")}.
                    </div>
                    <div>{navLink.displayName}</div>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="hidden md:block">
          <Link
            href={""}
            className="whitespace-nowrap bg-primary-600 px-5 py-3 text-sm font-bold text-neutral-100 no-underline"
          >
            Download CV
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
