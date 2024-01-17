import alinea, {createNextCMS} from "alinea"
import {PageSchema} from "@/components/page";

export const cms = createNextCMS({
  schema: {
    PageSchema
  },
  preview:"http://localhost:3000/api/preview",
  workspaces: {
    main: alinea.workspace("Static Pages", {
      pages: alinea.root("Page", {
        [alinea.meta]: {
          contains: ["Page", "PageSchema"]
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
