import Image from "next/image"
import clsx from "clsx"

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
      <Image
        className="rounded-[14px]"
        src={props.logo.src}
        alt={props.logo.alt!}
        blurDataURL={props.logo.base64!}
        width={36}
        height={36}
      />
    </div>
  )
}
export default Logo
