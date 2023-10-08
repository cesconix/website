import Link from "next/link"
import { GitHubLogoIcon } from "@radix-ui/react-icons"
import { isParagraph } from "datocms-structured-text-utils"
import { Image } from "react-datocms/image"
import { renderNodeRule, StructuredText } from "react-datocms/structured-text"

import { ProjectBlockFragment } from "@/types/codegen/graphql"
import { ArrowIcon } from "@/components/icons"

function ProjectBlock(props: ProjectBlockFragment) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
      {props.projects.map((entry) => (
        <div
          key={entry.id}
          className="bg-neutral-600 p-5 space-y-4 hover:md:bg-neutral-500"
        >
          {entry.image ? <Image data={entry.image.responsiveImage!} /> : null}
          <div className="flex items-center gap-3">
            <div>
              <div className="font-medium text-foreground-200 text-lg flex items-center gap-1">
                {entry.title}
              </div>
              <div className="text-base text-foreground-700">{entry.date}</div>
            </div>
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
          <Link
            href={entry.link}
            target="_blank"
            className="text-primary-600 text-base flex items-center gap-1 hover:underline underline-offset-2 "
          >
            {entry.hasRepository ? "View Repository" : "Read more"}
            <ArrowIcon />
          </Link>
        </div>
      ))}
    </div>
  )
}

export default ProjectBlock
