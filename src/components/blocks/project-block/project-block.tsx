import Link from "next/link"
import { isParagraph } from "datocms-structured-text-utils"
import { Image } from "react-datocms/image"
import { renderNodeRule, StructuredText } from "react-datocms/structured-text"

import { ProjectBlockFragment } from "@/types/codegen/graphql"
import { ArrowIcon } from "@/components/icons"

function getLinkText(project: ProjectBlockFragment["projects"][0]) {
  switch (project.projectType) {
    case "repository":
      return `View Repository`
    case "app":
      return `Read more about ${project.title}`
    case "keynote":
      return `Download Keynote`
    default:
      break
  }
}

function ProjectBlock(props: ProjectBlockFragment) {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
      {props.projects.map((entry) => {
        return (
          <li
            key={entry.id}
            className="bg-neutral-600 p-5 space-y-4 hover:md:bg-neutral-500"
            role="listitem"
          >
            {entry.image ? <Image data={entry.image.responsiveImage!} /> : null}
            <header>
              <h2 className="font-medium text-foreground-200 text-lg flex items-center gap-1">
                {entry.title}
              </h2>
              <div className="text-base text-foreground-700">{entry.date}</div>
            </header>
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
            <footer>
              <Link
                href={entry.link}
                target="_blank"
                className="text-primary-600 text-base flex items-center gap-1 hover:underline underline-offset-2 "
              >
                {getLinkText(entry)}
                <ArrowIcon />
              </Link>
            </footer>
          </li>
        )
      })}
    </ul>
  )
}

export default ProjectBlock
