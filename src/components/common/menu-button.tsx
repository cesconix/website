import { useEffect, useMemo, useRef, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/router"
import * as Dialog from "@radix-ui/react-dialog"

import { ArrowIcon, CloseIcon, MenuIcon } from "@/components/icons"

import { HeaderProps } from "../layout/header"
import Logo from "./logo"
import NavLinks from "./nav-links"

function MenuButton(props: HeaderProps) {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [container, setContainer] = useState<HTMLElement | null>(null)

  const activeNavLink = useMemo(() => {
    return props.navLinks.find(
      (navLink) => `/${navLink.slug}` === router.asPath
    )
  }, [props.navLinks, router.asPath])

  const isHome = activeNavLink?.title === "Home"

  useEffect(() => {
    const handleRouteComplete = () => {
      setOpen(false)
    }

    router.events.on("routeChangeComplete", handleRouteComplete)

    return () => {
      router.events.off("routeChangeComplete", handleRouteComplete)
    }
  }, [router])

  useEffect(() => {
    const el = document.getElementById("cesconix")
    setContainer(el)
  }, [])

  return (
    <div>
      <Dialog.Root modal open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button aria-label="menu" className="text-foreground-100 mt-1">
            <MenuIcon />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Content className="fixed font-space inset-0 mx-auto flex max-w-4xl flex-col justify-between bg-neutral-700 focus:outline-none">
            <header
              className={`mx-auto flex h-24 w-full items-center justify-between px-6`}
            >
              <Link href={"/home"}>
                <Logo logo={props.logo} active={isHome} />
              </Link>
              <div className="font-bold absolute left-0 text-center right-[0]">
                Menu
              </div>
            </header>
            <NavLinks data={props.navLinks} isMobile />
            <div className="flex space-x-6 my-12 justify-center">
              {props.socials.map((social) => {
                return (
                  <Link
                    key={social.key}
                    href={social.url}
                    className="flex items-center space-x-1 text-base text-foreground-500 md:text-xl"
                    target="_blank"
                  >
                    <span>{social.displayName}</span>
                    <ArrowIcon />
                  </Link>
                )
              })}
            </div>
            <Link
              target="_blank"
              href={props.cvFileUrl!}
              className="mx-6 block whitespace-nowrap bg-primary-600 px-5 py-3 text-center text-sm font-bold text-neutral-100 no-underline "
            >
              Download CV
            </Link>
            <div className="flex justify-center items-center text-sm py-4 text-foreground-500">
              or with cURL:{" "}
              <div className="p-1 bg-neutral-300 rounded ml-2 px-2 text-foreground-200 font-mono text-xs">
                curl https://cesco.me -o cv.pdf
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                className="absolute right-[18px] top-7 inline-flex h-10 w-10 appearance-none items-center justify-center focus:outline-none"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  )
}

export default MenuButton
