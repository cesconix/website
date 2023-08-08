import { useRouter } from "next/router"
import Link from "next/link"
import { clsx } from "clsx"

import { NavLink } from "@/types"

type NavLinksProps = {
  data: NavLink[]
  isMobile?: boolean
}

function NavLinks(props: NavLinksProps) {
  const { pathname } = useRouter()

  return (
    <ul
      className={clsx("flex tracking-normal", {
        "flex-grow flex-col justify-center": props.isMobile
      })}
    >
      {props.isMobile && (
        <NavLink
          index={-1}
          data={{ slug: "/", title: "Home" }}
          isActive={"/" === pathname}
          isMobile={props.isMobile}
        />
      )}
      {props.data
        ?.filter((navLink) => !navLink.hidden)
        .map((navLink, index) => {
          const isActive = `/${navLink.slug}` === pathname
          return (
            <NavLink
              key={navLink.slug}
              index={index}
              data={navLink}
              isActive={isActive}
              isMobile={props.isMobile}
            />
          )
        })}
    </ul>
  )
}

type NavLinkProps = {
  index: number
  data: NavLink
  isMobile?: boolean
  isActive?: boolean
}

function NavLink(props: NavLinkProps) {
  return (
    <li key={props.data.slug}>
      <Link
        key={props.data.slug}
        href={props.data.slug}
        className={clsx(
          "mx-1 flex place-items-baseline text-right no-underline hover:text-foreground-100",
          props.isActive ? "text-foreground-100" : "text-foreground-500",
          props.isMobile ? "space-y-3 px-6 text-3xl font-medium" : "p-3 text-sm"
        )}
      >
        <div
          className={clsx(
            "text-primary-600",
            props.isMobile ? "hidden" : "mr-2 text-xs"
          )}
        >
          {(props.index + 1).toString().padStart(2, "0")}.
        </div>
        <div>{props.data.title}</div>
      </Link>
    </li>
  )
}

export default NavLinks
