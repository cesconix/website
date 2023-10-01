import { Image } from "react-datocms/image"

import { ImageBlockFragment } from "@/types/codegen/graphql"

function ImageBlock(props: ImageBlockFragment) {
  const imageTitle = props.image.responsiveImage?.title
  return (
    <figure
      className={`relative z-[-1] my-6 flex flex-col items-center md:my-8 ${
        imageTitle && "mt-8"
      }`}
    >
      <Image data={props.image.responsiveImage!} />
      {imageTitle && (
        <figcaption className="mt-3 text-center font-space text-xs text-foreground-600 md:text-sm">
          {imageTitle}
        </figcaption>
      )}
    </figure>
  )
}

export default ImageBlock
