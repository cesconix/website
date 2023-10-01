import { isHeading, isParagraph } from "datocms-structured-text-utils"
import { renderNodeRule, StructuredText } from "react-datocms"

import * as Blocks from "../blocks"
import Heading from "./heading"
import Paragraph from "./paragraph"

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
        const componentName = record.__typename.split("Record")[0]
        const BlockComponent = (Blocks as any)[componentName]
        if (BlockComponent) {
          return <BlockComponent {...record} />
        }
      }}
      {...props}
    />
  )
}

export default CustomStructuredText
