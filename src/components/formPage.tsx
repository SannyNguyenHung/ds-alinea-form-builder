import alinea from "alinea";
import { ContentBlock, Content } from "./blocks/content";
import { HeaderBlock, Header } from "./blocks/header";
import { HeroBlock, Hero } from "./blocks/hero";
import { LogoBanner, LogoBannerBlock } from "./blocks/logoBanner";
import { CallToAction, CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";
import { Banner, BannerBlock } from "./blocks/banner";
import { FooterBlock, Footer } from "./blocks/footer";
import { PageHeader, PageHeaderBlock } from "./blocks/pageHeader";
import { getPageParent } from "@/cms";

export const FormPageSchema = alinea.type("Form Page", {
    title: alinea.text("Title"),
    slug: alinea.path("Slug", {
        required: true,
    }),
    blocks: alinea.list("Blocks", {
      schema: alinea.schema({
        Banner: BannerBlock,
        PageHeader: PageHeaderBlock,
        Text: ContentBlock,
        Hero: HeroBlock,
        LogoBanner: LogoBannerBlock,
        CallToAction: CallToActionBlock
      })
    }),
    header: alinea.list("Header (parent)", {
        schema: alinea.schema({
          Banner: BannerBlock,
          Text: ContentBlock,
          Header: HeaderBlock,
        })
    }),
    footer: alinea.list("Footer (parent)", {
        schema: alinea.schema({
          Banner: BannerBlock,
          Text: ContentBlock,
          Footer: FooterBlock,
        })
    }),
    [alinea.meta]: {
      contains: ["FormPageSchema", "FlowPageSchema", "PageSchema"],
      isContainer: true
    }
  });

export type FormPage = alinea.infer<typeof FormPageSchema>;

// Refactor this to use a map of components
export function MapBlock({block} : {block: any}) {
    switch (block.type) {
        case "Banner":
            return <Banner block={block} />
        case "Text":
            return <Content block={block} />
        case "Header":
            return <Header block={block} />
        case "Hero":
            return <Hero block={block} />
        case "LogoBanner":
            return <LogoBanner block={block} />
        case "CallToAction":
            return <CallToAction block={block} />
        case "Footer":
            return <Footer block={block} />
        case "PageHeader":
            return <PageHeader block={block} />
    }
    return <>Error</>
}

export async function FormPageBlocks({page} : {page: FormPage}) {
    const parent = await getPageParent(page);
    const header = page?.header.length > 0 ? page?.header : parent?.page?.header;
    const footer = page?.footer.length > 0 ? page?.footer :parent?.page?.footer;
    
    return (
        <div className="">
            {header?.map(block => <MapBlock key={uuidv4()} block={block} />)}
            {page?.blocks?.map(block => <MapBlock key={uuidv4()} block={block} />)}            
            {footer?.map(block => <MapBlock key={uuidv4()} block={block} />)}
        </div>
    )
}