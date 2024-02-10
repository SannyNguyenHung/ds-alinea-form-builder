import alinea from "alinea";
import { ContentBlock } from "./blocks/content";
import { CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";
import { BannerBlock } from "./blocks/banner";
import { PageHeaderBlock } from "./blocks/pageHeader";
import { AiOutlineForm } from "react-icons/ai";
import { Page } from "./page";
import { MapBlock } from "./contentBlockMap";
import { InputBlock } from "./blocks/input";

export const FormPageSchema = alinea.type("📝 Form Page", {
  title: alinea.text("Title"),
  slug: alinea.path("Slug", {
    required: true,
  }),
  blocks: alinea.list("Blocks", {
    schema: alinea.schema({
      Banner: BannerBlock,
      PageHeader: PageHeaderBlock,
      Text: ContentBlock,
      CallToAction: CallToActionBlock,
      Input: InputBlock
    })
  }),
  [alinea.meta]: {
    contains: ["FormPageSchema", "FlowPageSchema", "PageSchema"],
    isContainer: true,
    entryUrl(entry) {
      return `/form/${entry.parentPaths.join("/")}/${entry.path}`
    },
    icon: AiOutlineForm
  }
});

export type FormPage = alinea.infer<typeof FormPageSchema>;


export async function FormPageBlocks({ page, parent }: { page: FormPage, parent: Page }) {
  return (
    <div className="!pt-0 !pb-0">
      {parent?.header?.map(block => <MapBlock key={uuidv4()} block={block} />)}
      <div className="min-h-screen bg-blue-100">
        {page?.blocks?.map(block => <MapBlock key={uuidv4()} block={block} />)}
      </div>
      {parent?.footer?.map(block => <MapBlock key={uuidv4()} block={block} />)}
    </div>
  )
}


export async function getFormBranches(page: FormPage) {
  const branches: Record<string, []> = {};

  page.blocks.filter(block => block.type === "Input")?.forEach(block => {
    const inputBlock = block as InputBlock;
    console.log("Content", inputBlock?.content);
    const radioElements = inputBlock?.content?.
      filter(element => element.type === "Radio").
      map(element => {
        return {
          group: ("group" in element ? element.group : "") as string | undefined,
          name: ("name" in element ? element.name : "") as string | undefined,
          text: ("text" in element ? element.text : "") as string | undefined
        }
    });

    if(radioElements?.length > 0) {
      radioElements.forEach((radioElement) => {
        branches[radioElement?.text ?? ""] = [];
      });
    }

  })

  return branches;
}