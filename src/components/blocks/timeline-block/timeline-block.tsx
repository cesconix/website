import { formatDate, getMonthDifference } from "@/utils"
import { isParagraph } from "datocms-structured-text-utils"
import { renderNodeRule, StructuredText } from "react-datocms/structured-text"

import { TimelineBlockFragment } from "@/types/codegen/graphql"

function TimelineBlock(props: TimelineBlockFragment) {
  return (
    <div className="relative ml-3 text-foreground-500 my-10">
      <div className="absolute left-0 top-4 bottom-0 w-[1px] border-l border-dashed border-l-primary-600"></div>
      <div className="grid gap-14 md:gap-16 text-lg md:text-xl">
        {props.timelines.map((entry) => {
          const dateInterval = getMonthDifference(
            entry.startDate,
            entry.endDate || new Date().toString()
          )

          return (
            <div
              key={entry.company}
              className="grid grid-cols-1 md:grid-cols-[165px_1fr] md:gap-16 pl-8 relative"
            >
              <div className="absolute flex items-center justify-center left-0 top-[14px] transform -translate-y-1/2 -translate-x-1/2 w-5 h-5 bg-neutral-700 rounded-full border border-primary-600">
                <div className="bg-foreground-100 rounded-full w-1 h-1" />
              </div>
              <div>
                <div className="font-medium text-foreground-200 text-lg">
                  {formatDate(entry.startDate)} -{" "}
                  {entry.endDate ? formatDate(entry.endDate) : "Present"}{" "}
                  <span className=" md:hidden text-foreground-700 font-normal">
                    {` · `}
                    {dateInterval}
                  </span>
                </div>
                <div className="text-base">{entry.company}</div>
                <div className="text-base text-foreground-700">
                  {entry.location}
                </div>
              </div>
              <div>
                <div className="md:block font-medium text-foreground-200 text-lg mt-3 md:mt-0">
                  {entry.role}
                  <span className="hidden md:inline text-foreground-700 font-normal">
                    {` · `}
                    {dateInterval}
                  </span>
                </div>
                <div className="space-y-4">
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
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TimelineBlock
