import { ReactNode } from "react"

type HeadingLevel = "h1" | "h2" | "h3" | "h4" | "h5" | "h6"

type HeadingProps = {
  level: HeadingLevel
  children: ReactNode
  className?: string
}

const Heading = ({ level, children, className }: HeadingProps) => {
  const baseClasses = " "

  const levelClasses = {
    h1: "font-medium tracking-tight text-3xl md:text-5xl my-5",
    h2: "font-medium tracking-tight text-2xl md:text-3xl my-4",
    h3: "text-xl md:text-2xl",
    h4: "",
    h5: "",
    h6: ""
  }

  const finalClass = [baseClasses, levelClasses[level], className]
    .join(" ")
    .trim()
  const HeadingTag = level

  return <HeadingTag className={finalClass}>{children}</HeadingTag>
}

export default Heading
