import Link from "next/link"
import { Image } from "react-datocms/image"

import { CertificationBlockFragment } from "@/types/codegen/graphql"
import { ArrowIcon } from "@/components/icons"

function CertificationBlock(props: CertificationBlockFragment) {
  return (
    <div className="pt-5 md:pt-3 pb-1 md:pb-3 relative">
      {props.certifications
        .filter((entry) => !entry.inProgress)
        .map((entry) => {
          return (
            <div
              key={entry.id}
              className="flex gap-4 my-2 items-center no-underline"
            >
              <div className="w-14">
                <Image data={entry.badge.responsiveImage!} />
              </div>
              <div className="">
                <Link
                  target="_blank"
                  href={entry.link!}
                  className="flex items-center text-base font-medium text-foreground-200 gap-1"
                >
                  {" "}
                  {entry.title}
                  <ArrowIcon />
                </Link>
                <div className="text-base text-foreground-700">
                  {entry.authority}
                </div>
              </div>
            </div>
          )
        })}
    </div>
  )
}

export default CertificationBlock
