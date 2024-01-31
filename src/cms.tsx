import alinea, {createNextCMS} from "alinea"
import {PageSchema, Page} from "@/components/page";
import { Entry } from "alinea/core";
import { FormPage, FormPageSchema } from "./components/formPage";

export const cms = createNextCMS({
  schema: alinea.schema({
    PageSchema,
    FormPageSchema,    
  }),
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
    }),
    formPages: alinea.workspace("Form Pages", {
      formPages: alinea.root("FormPage", {
        [alinea.meta]: {
          contains: ["FormPageSchema"],
        }
      }),
      media: alinea.media(),
      [alinea.meta]: {
        source: "src/content",
        mediaDir: "public",
      }
    })
  }
})


// --- Find a better way to do this ---
export async function getPageParent(page: Page) {
  
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
