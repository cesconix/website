import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import HamburgerMenuIcon from "./HamburgerMenuIcon"
import { NavLink } from "@/types"
import NavLinks from "./NavLinks"
import Link from "next/link"
import { useRouter } from "next/router"
import CloseIcon from "./CloseIcon"

type HamburgerMenuProps = {
  navLinks: NavLink[]
}

function HamburgerMenu(props: HamburgerMenuProps) {
  const router = useRouter()

  const [open, setOpen] = useState(false)
  const [container, setContainer] = useState(null)

  useEffect(() => {
    const handleRouteComplete = () => {
      setOpen(false)
    }

    router.events.on("routeChangeComplete", handleRouteComplete)

    return () => {
      router.events.off("routeChangeComplete", handleRouteComplete)
    }
  }, [router])

  return (
    <div>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <button className="text-foreground-100">
            <HamburgerMenuIcon />
          </button>
        </Dialog.Trigger>
        <Dialog.Portal container={container}>
          <Dialog.Content className="fixed inset-0 z-10 mx-auto flex max-w-4xl flex-col justify-between bg-neutral-700 focus:outline-none">
            <NavLinks data={props.navLinks} isMobile />
            <Link
              href={""}
              className="mx-6 mb-6 block whitespace-nowrap bg-primary-600 px-5 py-3 text-center text-sm font-bold text-neutral-100 no-underline "
            >
              Download CV
            </Link>
            <Dialog.Close asChild>
              <button
                className="absolute right-[32px] top-[26px] inline-flex h-10 w-10 appearance-none items-center justify-center focus:outline-none"
                aria-label="Close"
              >
                <CloseIcon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
      {/* @ts-ignore */}
      <div ref={setContainer} />
    </div>
  )
}

export default HamburgerMenu
