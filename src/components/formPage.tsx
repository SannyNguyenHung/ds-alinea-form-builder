import { Config, Field, Infer } from "alinea";
import { ContentBlock } from "./blocks/content";
import { CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";
import { BannerBlock } from "./blocks/banner";
import { PageHeaderBlock } from "./blocks/pageHeader";
import { AiOutlineForm } from "react-icons/ai";
import { Page } from "./page";
import { MapBlock, Meta } from "./contentBlockMap";
import { InputBlock } from "./blocks/input";

export const FormPageSchema = Config.type("📝 Form Page", {
  fields: {
    title: Field.text("Title"),
    slug: Field.path("Slug", {required: true}),
    blocks: Field.list("Blocks", {
      schema: Config.schema({
        types: {
          Banner: BannerBlock,
          PageHeader: PageHeaderBlock,
          Text: ContentBlock,
          CallToAction: CallToActionBlock,
          Input: InputBlock
        }
      })
    })
  },
  isContainer: true,
  contains: ["FormPageSchema", "FlowPageSchema", "PageSchema"],
  entryUrl(entry) {
    return `/form/${entry.parentPaths.join("/")}/${entry.path}`
  },
  icon: AiOutlineForm
});

export type FormPage = Infer<typeof FormPageSchema>;


export async function FormPageBlocks({ page, parent, meta }: { page: FormPage, parent: Page, meta: Meta }) {
  return (
    <div className="!pt-0 !pb-0">
      {parent?.header?.map(block => <MapBlock key={uuidv4()} block={block} meta={meta} />)}
      <div className="min-h-screen bg-blue-100">
        {page?.blocks?.map(block => <MapBlock key={uuidv4()} block={block} meta={meta} />)}
      </div>
      {parent?.footer?.map(block => <MapBlock key={uuidv4()} block={block} meta={meta} />)}
    </div>
  )
}

const ExportTypes = ["Input"]
const ExportElementsTypes = ["Radio"]

export async function getFormBranches(page: FormPage) {
  //const branches: Record<string, []> = {};


  return page.blocks.filter(block => ExportTypes.includes(block.type)).flatMap(block => {
    const inputBlock = block as InputBlock;
    console.log("Content", inputBlock?.content);
    
    return inputBlock?.content?.filter(block => ExportElementsTypes.includes(block.type)).
      map(element => {
        return {
          group: ("group" in element ? element.group : "") as string | undefined,
          name: ("name" in element ? element.name : "") as string | undefined,
          text: ("text" in element ? element.text : "") as string | undefined
        }
    })
  })

  //return branches;
}