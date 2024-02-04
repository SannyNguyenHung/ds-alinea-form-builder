import alinea from "alinea"
import { createCMS } from "alinea/next";
import {PageSchema, type Page} from "@/components/page";
import { Entry } from "alinea/core";
import { FlowPage, FlowPageSchema } from "./components/flowPage";
import { FormPage, FormPageSchema } from "./components/formPage";

export const cms = createCMS({
  schema: alinea.schema({
    PageSchema,
    FlowPageSchema,
    FormPageSchema
  }),
  preview:"http://localhost:3000/api/preview",
  workspaces: {
    main: alinea.workspace("A2J", {
      pages: alinea.root("Page", {
        [alinea.meta]: {
          contains: ["PageSchema", "FlowPageSchema", "FormPageSchema"]
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

export async function getFlowPageChildren(path: string[]) {
  return cms.find(Entry({parent: (await getFlowPage(path))?.entryId}).select({
    page: FormPageSchema
  }));
}

async function getFlowPage(path: string[]) {
  const entrySlug = path.reverse()[0];
  const flowPath = path.reverse().slice(0, path.length - 1);

  const flowPages = (await cms.find(FlowPageSchema({slug: entrySlug}).select({
    page: PageSchema,
    parentDir: Entry.parentDir,
    parent: Entry.parent,
    entryId: Entry.entryId
  }))).filter(page => page.parentDir === `/${flowPath.join("/")}`);

  return flowPages?.[0];
}


// --- Find a better way to do this ---
export async function getPageParent(page: Page) {
  
  const parentEntry = await cms.maybeGet(PageSchema({slug: page?.slug})
    .select({
      parent: Entry.parent,
    })
  );

  return cms.find(Entry({entryId: parentEntry?.parent ?? ""})
  .select({
    page: PageSchema,
    })
  .first()
  );
}
