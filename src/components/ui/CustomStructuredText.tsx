import { Image, renderNodeRule, StructuredText } from "react-datocms"
import {
  isHeading,
  isParagraph,
  StructuredText as StructuredTextProps
} from "datocms-structured-text-utils"

import { AboutMe } from "@/components/blocks"
import { SocialLink } from "@/types"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

const CustomStructuredText = (props: any) => {
  return (
    <StructuredText
      data={props.data}
      customNodeRules={[
        renderNodeRule(isHeading, ({ node, children, key }) => {
          return (
            <Heading key={key} level={`h${node.level}`} className="">
              {children}
            </Heading>
          )
        }),
        renderNodeRule(isParagraph, ({ children, key }) => {
          return <Paragraph key={key}>{children}</Paragraph>
        })
      ]}
      renderBlock={({ record }) => {
        switch (record.__typename) {
          case "HeroProfileRecord":
            return (
              <AboutMe
                welcome={record.welcome as string}
                fullname={record.fullname as string}
                tagline={record.tagline as string}
                shortBio={record.shortBio as StructuredTextProps}
                socialLinks={record.socialLinks as SocialLink[]}
              />
            )
          case "HeroImageRecord":
            const imageTitle = (record.image as any).responsiveImage.title
            return (
              <div
                className={`my-4 flex flex-col items-center ${
                  imageTitle && "mt-8"
                }`}
              >
                <Image data={(record.image as any).responsiveImage} />
                {imageTitle && (
                  <p className="mt-3 text-center font-space text-xs text-foreground-600 md:text-sm">
                    {imageTitle}
                  </p>
                )}
              </div>
            )
          default:
            return null
        }
      }}
      {...props}
    />
  )
}

export default CustomStructuredText
