import alinea from "alinea";
import { ContentBlock } from "./blocks/content";
import { v4 as uuidv4 } from "uuid";
import { BannerBlock } from "./blocks/banner";
import { MapBlock, PageSchema } from "./page";
import { cms } from "@/cms";

export const FlowPageSchema = alinea.type("Flow Page", {
  title: alinea.text("Title"),
  slug: alinea.path("Slug", {
    required: true,
  }),
  blocks: alinea.list("Blocks", {
    schema: alinea.schema({
      Banner: BannerBlock,
      Text: ContentBlock,
    })
  }),
  [alinea.meta]: {
    contains: ["FlowPageSchema"],
    isContainer: true,
    entryUrl(entry) {
      return `/flow/${entry.parentPaths.filter(path => path !== "index").join("/")}/${entry.path}`
    }
  }
});

export type FlowPage = alinea.infer<typeof FlowPageSchema>;

export async function FlowPageBlocks({ page }: { page: FlowPage }) {
  const [rootPage] = await cms.find(PageSchema({ slug: "index" }));

  return (
    <div className="">
      {rootPage?.header?.map(block => <MapBlock key={uuidv4()} block={block} />)}
      {page?.blocks?.map(block => <MapBlock key={uuidv4()} block={block} />)}
      {rootPage?.footer?.map(block => <MapBlock key={uuidv4()} block={block} />)}
    </div>
  )
}