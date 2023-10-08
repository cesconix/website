import Link from "next/link"
import { isParagraph } from "datocms-structured-text-utils"
import { renderNodeRule, StructuredText } from "react-datocms/structured-text"

import { HeroProfileBlockFragment } from "@/types/codegen/graphql"
import { Heading } from "@/components/common"
import { ArrowIcon } from "@/components/icons"

function HeroProfileBlock(props: HeroProfileBlockFragment) {
  return (
    <section className="flex min-h-[calc(100dvh-96px)] flex-col justify-center">
      <div className="space-y-4 text-foreground-700 md:space-y-5">
        <p className="text-base font-medium text-primary-600 md:text-xl">
          {props.welcome}
        </p>
        <Heading level="h1" className="text-foreground-100">
          {props.fullname}
        </Heading>
        <Heading level="h1" className="text-foreground-600">
          {props.tagline}
        </Heading>
        <div className="space-y-4">
          <StructuredText
            data={props.shortBio as any}
            customNodeRules={[
              renderNodeRule(isParagraph, ({ children, key }) => {
                return (
                  <p key={key} className="mt-8 md:mt-10 text-xl md:text-2xl">
                    {children}
                  </p>
                )
              })
            ]}
            {...props}
          />
        </div>
      </div>
      <div className="mb-4 mt-14 flex space-x-6">
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

export default HeroProfileBlock
