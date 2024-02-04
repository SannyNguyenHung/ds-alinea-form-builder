import alinea from "alinea";
import { ContentBlock } from "./blocks/content";
import { HeroBlock } from "./blocks/hero";
import { LogoBannerBlock } from "./blocks/logoBanner";
import { CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";
import { BannerBlock } from "./blocks/banner";
import { PageHeaderBlock } from "./blocks/pageHeader";
import { getPage } from "@/cms";
import { AiOutlineForm } from "react-icons/ai";
import { Page, PageSchema } from "./page";
import { MapBlock } from "./contentBlockMap";

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


export async function FormPageBlocks({page} : {page: FormPage}) {
    const parent = (await getPage(PageSchema, ["index"])).page as Page;
    
    return (
        <div className="">
            {parent?.header?.map(block => <MapBlock key={uuidv4()} block={block} />)}
            {page?.blocks?.map(block => <MapBlock key={uuidv4()} block={block} />)}            
            {parent?.footer?.map(block => <MapBlock key={uuidv4()} block={block} />)}
        </div>
    )
}