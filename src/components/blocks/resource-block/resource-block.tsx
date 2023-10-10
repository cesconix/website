import Link from "next/link"

import { ResourceBlockFragment } from "@/types/codegen/graphql"
import { Heading } from "@/components/common"

function ResourceBlock(props: ResourceBlockFragment) {
  return (
    <section>
      <Heading level="h2">{props.title}</Heading>
      <ul className="space-y-2 text-foreground-500 list-disc ml-3.5">
        {props.resources.map((resource) => (
          <li key={resource.title}>
            <Link href={resource.link} target="_blank">
              {resource.title}
            </Link>
            <span className=""> – {resource.description}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ResourceBlock
