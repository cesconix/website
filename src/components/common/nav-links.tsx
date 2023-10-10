import Link from "next/link"
import { useRouter } from "next/router"
import { NavLinkType } from "@/types"
import { clsx } from "clsx"

type NavLinksProps = {
  data: NavLinkType[]
  isMobile?: boolean
}

function NavLinks(props: NavLinksProps) {
  const { asPath } = useRouter()

  return (
    <ul
      className={clsx("flex tracking-normal", {
        "flex-grow flex-col justify-center items-center": props.isMobile
      })}
    >
      {props.isMobile && (
        <NavLink
          index={-1}
          data={{ slug: "/home", title: "Home" }}
          isActive={"/home" === asPath}
          isMobile={props.isMobile}
        />
      )}
      {props.data
        ?.filter((navLink) => !navLink.hidden)
        .map((navLink, index) => {
          const isActive = `/${navLink.slug}` === asPath
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
  data: NavLinkType
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
          "mx-1 flex place-items-baseline no-underline text-right hover:text-foreground-100",
          props.isActive ? "text-foreground-100" : "text-foreground-700",
          props.isMobile ? "py-2 px-6 text-3xl font-semibold" : "p-3 text-sm"
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
        <div
          className={clsx(
            props.isActive && !props.isMobile && "underline underline-offset-4"
          )}
        >
          {props.data.title}
        </div>
      </Link>
    </li>
  )
}

export default NavLinks
