import alinea, {createNextCMS} from "alinea"
import {PageSchema, Page} from "@/components/page";
import { Entry } from "alinea/core";

export const cms = createNextCMS({
  schema: {
    PageSchema
  },
  preview:"http://localhost:3000/api/preview",
  workspaces: {
    main: alinea.workspace("Static Pages", {
      pages: alinea.root("Page", {
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

export async function getParent(page: Page) {
  
  const parentEntry = await cms.maybeGet(PageSchema({slug: page.slug})
    .select({
      parent: Entry.parent
    })
  );

  return cms.find(Entry({entryId: parentEntry?.parent ?? ""})
  .select({
    page: PageSchema
    })
  .first()
  );
}
