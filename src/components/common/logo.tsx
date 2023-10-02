import { Image } from "react-datocms/image"

import { ResponsiveImage } from "@/types/codegen/graphql"

type LogoProps = {
  logo: ResponsiveImage
}

function Logo(props: LogoProps) {
  return (
    <div className="rounded-2xl border-[1px] border-solid border-primary-600 p-[2px]">
      <Image data={props.logo} className="rounded-[14px]" />
    </div>
  )
}
export default Logo
