import {
  renderNodeRule,
  StructuredText,
  StructuredTextPropTypes
} from "react-datocms"
import {
  isHeading,
  isParagraph,
  StructuredText as StructuredTextProps
} from "datocms-structured-text-utils"

import { AboutMe } from "@/components/blocks"
import { SocialLink } from "@/types"
import Heading from "./Heading"
import Paragraph from "./Paragraph"

const CustomStructuredText = (props: StructuredTextPropTypes) => {
  return (
    <StructuredText
      data={props.data}
      customNodeRules={[
        renderNodeRule(isHeading, ({ node, children, key }) => {
          return (
            <Heading key={key} level={`h${node.level}`}>
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

          default:
            return null
        }
      }}
      {...props}
    />
  )
}

export default CustomStructuredText
