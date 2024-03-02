import { createCMS } from "alinea/next";
import { Query, Config } from "alinea";
import { PageSchema } from "@/components/page";
import { FlowPageSchema } from "./components/flowPage";
import { FormPageSchema } from "./components/formPage";

export const cms = createCMS({
  schema: Config.schema({
    types: {
      PageSchema,
      FlowPageSchema,
      FormPageSchema,
    },
  }),
  preview: "http://localhost:3000/api/preview",
  workspaces: {
    main: Config.workspace("A2J", {
      source: "src/content",
      mediaDir: "public",
      roots: {
        pages: Config.root("Page", {
          contains: ["PageSchema", "FlowPageSchema", "FormPageSchema"],
        }),
        media: Config.media(),
      },
    }),
  },
});

export async function getFlowPageChildren(path: string[]) {
  const parentId = (await getPage(FlowPageSchema, path))?.entryId;
  return cms.find(
    Query.whereParent(parentId).select({
      page: FormPageSchema,
    }),
  );
}

type CmsPageSchema =
  | typeof FlowPageSchema
  | typeof PageSchema
  | typeof FormPageSchema;

export async function getPage(schema: CmsPageSchema, path: string[]) {
  const entrySlug = path.reverse()[0];
  const pagePath = path.reverse().slice(0, path.length - 1);

  const pages = await cms.find(
    Query(schema).where({ slug: entrySlug }).select({
      page: schema,
      parent: Query.parent,
      entryId: Query.id,
      path: Query.path,
    }),
  );

  return pages?.[0];
}

export async function getPageParent(page: string) {
  const parentEntry = await cms.maybeGet(
    PageSchema({ slug: page }).select({
      parent: Query.parent,
    }),
  );

  return cms.find(
    Query.whereId(parentEntry?.parent ?? "")
      .select({
        page: PageSchema,
      })
      .first(),
  );
}
