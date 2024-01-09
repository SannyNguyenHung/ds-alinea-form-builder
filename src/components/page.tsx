import alinea from "alinea";
import { ContentBlock, Content } from "./blocks/content";
import { HeaderBlock, Header } from "./blocks/header";
import { HeroBlock, Hero } from "./blocks/hero";
import { LogoBanner, LogoBannerBlock } from "./blocks/logoBanner";
import { CallToAction, CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";

export const PageSchema = alinea.type('Page', {
    title: alinea.text('Title'),
    slug: alinea.text('Slug'),
    blocks: alinea.list('Blocks', {
      schema: alinea.schema({
        Text: ContentBlock,
        Header: HeaderBlock,
        Hero: HeroBlock,
        LogoBanner: LogoBannerBlock,
        CallToAction: CallToActionBlock
      })
    })
  });

export type Page = alinea.infer<typeof PageSchema>;

export default function Page({page} : {page: Page}) {
    return (
        <main className="">
            {page.blocks.map(block => {
                switch (block.type) {
                    case 'Text':
                        return <Content key={uuidv4()} block={block} />
                    case 'Header':
                        return <Header key={uuidv4()} block={block} />
                    case 'Hero':
                        return <Hero key={uuidv4()} block={block} />
                    case 'LogoBanner':
                        return <LogoBanner key={uuidv4()} block={block} />
                    case 'CallToAction':
                        return <CallToAction key={uuidv4()} block={block} />
                    default:
                        return null
                }
            })}
        </main>
    )
}