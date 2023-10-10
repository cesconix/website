import Image from "next/image"

import { ImageBlockFragment } from "@/types/codegen/graphql"

function ImageBlock(props: ImageBlockFragment) {
  const imageTitle = props.image.responsiveImage?.title
  return (
    <figure
      className={`relative my-6 flex flex-col items-center md:my-8 ${
        imageTitle && "mt-8"
      }`}
    >
      <Image
        src={props.image.responsiveImage?.src!}
        alt={props.image.responsiveImage?.alt!}
        width={props.image.responsiveImage?.width}
        height={props.image.responsiveImage?.height}
        blurDataURL={props.image.responsiveImage?.base64!}
      />
      {imageTitle && (
        <figcaption className="mt-3 text-center font-space text-xs text-foreground-600 md:text-sm">
          {imageTitle}
        </figcaption>
      )}
    </figure>
  )
}

export default ImageBlock
