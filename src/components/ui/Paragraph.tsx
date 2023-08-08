import { ReactNode } from "react"

type ParagraphProps = {
  children: ReactNode
  className?: string
}

const Paragraph = ({ children, className }: ParagraphProps) => {
  const baseClasses =
    "text-lg md:text-xl text-foreground-500 my-4 md:leading-relaxed font-space"
  const finalClass = [baseClasses, className].join(" ").trim()
  return <p className={finalClass}>{children}</p>
}

export default Paragraph
