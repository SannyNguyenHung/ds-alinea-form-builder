

import alinea from "alinea"

export const ImageElementSchema = alinea.type("🖼️ Image", {
    width: alinea.number("Width", { minValue: 0 }),
    height: alinea.number("Height", { minValue: 0 }),
    image: alinea.image("Image"),
    alt: alinea.text("Alt Text"),
})

export type ImageElementSchema = alinea.infer<typeof ImageElementSchema>;
  
export function ImageElement({ width, height, image, alt } : ImageElementSchema ) {
    return (<img width={width ?? undefined} height={height ?? undefined} src={image.src} alt={alt} />)
}
