import alinea from "alinea";
import { ContentBlock, Content } from "./blocks/content";
import { HeaderBlock, Header } from "./blocks/header";
import { HeroBlock, Hero } from "./blocks/hero";
import { LogoBanner, LogoBannerBlock } from "./blocks/logoBanner";
import { CallToAction, CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";
import { Banner, BannerBlock } from "./blocks/banner";

export const PageSchema = alinea.type('Page', {
    title: alinea.text('Title'),
    slug: alinea.text('Slug'),
    blocks: alinea.list('Blocks', {
      schema: alinea.schema({
        Banner: BannerBlock,
        Text: ContentBlock,
        Header: HeaderBlock,
        Hero: HeroBlock,
        LogoBanner: LogoBannerBlock,
        CallToAction: CallToActionBlock
      })
    }),
    header: alinea.list('Header (parent)', {
        schema: alinea.schema({
          Banner: BannerBlock,
          Text: ContentBlock,
          Header: HeaderBlock,
        })
    }),
    footer: alinea.list('Footer (parent)', {
        schema: alinea.schema({
          Banner: BannerBlock,
          Text: ContentBlock,
          Header: HeaderBlock,
        })
    }),
  });

export type Page = alinea.infer<typeof PageSchema>;

function MapBlock({block} : {block: any}) {
    switch (block.type) {
        case 'Banner':
            return <Banner block={block} />
        case 'Text':
            return <Content block={block} />
        case 'Header':
            return <Header block={block} />
        case 'Hero':
            return <Hero block={block} />
        case 'LogoBanner':
            return <LogoBanner block={block} />
        case 'CallToAction':
            return <CallToAction block={block} />
    }
    return <>Error</>
}

export default function Blocks({page, indexPage} : {page: Page, indexPage?: Page}) {
    const header = page.header ?? indexPage?.header;
    const footer = page.footer ?? indexPage?.footer;

    return (
        <main className="">
            {header?.map(block => <MapBlock key={uuidv4()} block={block} />)}
            {page.blocks?.map(block => <MapBlock key={uuidv4()} block={block} />)}            
            {footer?.map(block => <MapBlock key={uuidv4()} block={block} />)}
        </main>
    )
}