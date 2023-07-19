import { SocialLink } from "@/types"
import Link from "next/link"
import ArrowIcon from "./ArrowIcon"

type WhoAmIProps = {
  welcome: string
  fullname: string
  tagline: string
  shortBio: string
  socialLinks: SocialLink[]
}

function WhoAmI(props: WhoAmIProps) {
  return (
    <section>
      <div className="space-y-5">
        <p className="text-base font-medium text-primary-600 md:text-xl">
          {props.welcome}
        </p>
        <h1 className="text-white text-3xl font-medium tracking-tight md:text-5xl">
          {props.fullname}
        </h1>
        <h2 className="text-3xl font-medium tracking-tight text-foreground-600 md:text-5xl">
          {props.tagline}
        </h2>
        <h3
          className="space-y-5 text-xl text-foreground-700 md:text-2xl"
          dangerouslySetInnerHTML={{
            __html: props.shortBio as string
          }}
        />
      </div>
      <div className="my-10 flex space-x-5">
        {props.socialLinks.map((socialLink) => {
          return (
            <Link
              key={socialLink.key}
              href={socialLink.url}
              className="flex items-center space-x-1 text-base text-foreground-500 md:text-xl"
              target="_blank"
            >
              <span>{socialLink.displayName}</span>
              <ArrowIcon />
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default WhoAmI
