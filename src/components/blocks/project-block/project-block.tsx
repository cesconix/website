import { isParagraph } from "datocms-structured-text-utils"
import { renderNodeRule, StructuredText } from "react-datocms/structured-text"

import { ProjectBlockFragment } from "@/types/codegen/graphql"

function ProjectBlock(props: ProjectBlockFragment) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      {props.projects.map((entry) => (
        <div key={entry.id} className="bg-neutral-600 p-5 space-y-4">
          <div>
            <div className="font-medium text-foreground-200 text-lg">
              {entry.title}
            </div>
            <div className="text-base text-foreground-700">{entry.date}</div>
          </div>
          <div className="space-y-4 text-foreground-500">
            <StructuredText
              data={entry.description as any}
              customNodeRules={[
                renderNodeRule(isParagraph, ({ children, key }) => {
                  return (
                    <p key={key} className="text-base">
                      {children}
                    </p>
                  )
                })
              ]}
              {...props}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectBlock
