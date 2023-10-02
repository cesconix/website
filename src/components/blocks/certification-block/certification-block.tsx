import Link from "next/link"
import { Image } from "react-datocms/image"

import { CertificationBlockFragment } from "@/types/codegen/graphql"
import { ArrowIcon } from "@/components/icons"

function CertificationBlock(props: CertificationBlockFragment) {
  return (
    <div className="pt-5 pb-1 md:pb-3">
      {props.entries
        .filter((entry) => !entry.inProgress)
        .map((entry) => {
          return (
            <Link
              target="_blank"
              href={entry.link!}
              key={entry.id}
              className="flex gap-4 my-2 items-center no-underline relative z-[-1]"
            >
              <div className="w-14">
                <Image data={entry.badge.responsiveImage!} />
              </div>
              <div className="">
                <div className="flex items-center text-base font-medium text-foreground-200 gap-1">
                  {entry.title}
                  <ArrowIcon />
                </div>
                <div className="text-base text-foreground-700">
                  {entry.authority}
                </div>
              </div>
            </Link>
          )
        })}
    </div>
  )
}

export default CertificationBlock
