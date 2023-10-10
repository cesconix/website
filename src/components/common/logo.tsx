import clsx from "clsx"
import { Image } from "react-datocms/image"

import { ResponsiveImage } from "@/types/codegen/graphql"

type LogoProps = {
  logo: ResponsiveImage
  active: boolean
}

function Logo(props: LogoProps) {
  return (
    <div
      className={clsx(
        "rounded-2xl border-[1px] border-solid border-primary-600 p-[2px] hover:scale-105"
      )}
    >
      <Image data={props.logo} className="rounded-[14px]" lazyLoad={false} />
    </div>
  )
}
export default Logo
