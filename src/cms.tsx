import alinea from "alinea"
import { createCMS } from "alinea/next";
import { Entry } from "alinea/core";
import { PageSchema} from "@/components/page";
import { FlowPageSchema } from "./components/flowPage";
import { FormPageSchema } from "./components/formPage";

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
  return cms.find(Entry({parent: (await getPage(FlowPageSchema, path))?.entryId}).select({
    page: FormPageSchema
  }));
}

type CmsPageSchema = typeof FlowPageSchema | typeof PageSchema | typeof FormPageSchema;

export async function getPage(schema: CmsPageSchema, path: string[]) {
  const entrySlug = path.reverse()[0];
  const pagePath = path.reverse().slice(0, path.length - 1);

  const pages = (await cms.find(schema({slug: entrySlug}).select({
    page: schema,
    parentDir: Entry.parentDir,
    parent: Entry.parent,
    entryId: Entry.entryId
  }))).filter(page => page.parentDir === `/${pagePath.join("/")}`);

  return pages?.[0];
}

export async function getPageParent(page: string) {  
  const parentEntry = await cms.maybeGet(PageSchema({slug: page})
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