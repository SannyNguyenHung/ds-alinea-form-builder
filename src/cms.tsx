import alinea, {createNextCMS} from "alinea"
import {PageSchema} from "@/components/page";

export const cms = createNextCMS({
  schema: {
    PageSchema
  },
  preview:'http://localhost:3000/api/preview',
  workspaces: {
    main: alinea.workspace("RAST", {
      pages: alinea.root("RAST", {
        index: alinea.page(
          PageSchema({
            title: "Welcome"
          })
        ),
        [alinea.meta]: {
          contains: ["PageSchema"]
        }
      }),
      media: alinea.media(),
      [alinea.meta]: {
        source: "src/content",
        mediaDir: "public"
      }
    })
  }
})
