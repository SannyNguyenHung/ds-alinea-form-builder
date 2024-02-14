

import { Config, Field, Infer } from "alinea"

export const ImageElementSchema = Config.type("🖼️ Image", { fields: {
    width: Field.number("Width", { minValue: 0 }),
    height: Field.number("Height", { minValue: 0 }),
    image: Field.image("Image"),
    alt: Field.text("Alt Text"),
}});

export type ImageElementSchema = Infer<typeof ImageElementSchema>;
  
export function ImageElement({ width, height, image, alt } : ImageElementSchema ) {
    return (<img width={width ?? undefined} height={height ?? undefined} src={image.src} alt={alt} />)
}
