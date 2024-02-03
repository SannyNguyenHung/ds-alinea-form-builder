import alinea from "alinea"
import { createCMS } from "alinea/next";
import {PageSchema, Page} from "@/components/page";
import { Entry } from "alinea/core";
import { FlowPageSchema } from "./components/flowPage";

export const cms = createCMS({
  schema: alinea.schema({
    PageSchema,
    FlowPageSchema
  }),
  preview:"http://localhost:3000/api/preview",
  workspaces: {
    main: alinea.workspace("RAST", {
      pages: alinea.root("Page", {
        [alinea.meta]: {
          contains: ["PageSchema", "FlowPageSchema"]
        }
      }),
      media: alinea.media(),
      [alinea.meta]: {
        source: "src/content",
        mediaDir: "public"
      }
    }),
  }
})

export async function getFlowPage(path: string[]) {
  const pageName = path.pop();
  const parents = path;

  const entries = await cms.find(FlowPageSchema(
    {
      slug: pageName ?? "index",
    }
  ).select({
    parent: Entry.parent,
    page: FlowPageSchema
  }));

  return entries.filter(entry => {
    return parents.filter(parent => parent.includes(entry.parent ?? "")).length === parents.length;
  }).map(entry => entry.page);
}


// --- Find a better way to do this ---
export async function getPageParent(page: Page) {
  
  const parentEntry = await cms.maybeGet(PageSchema({slug: page?.slug})
    .select({
      parent: Entry.parent
    })
  );

  return cms.find(Entry({entryId: parentEntry?.parent ?? "index"})
  .select({
    page: PageSchema
    })
  .first()
  );
}
