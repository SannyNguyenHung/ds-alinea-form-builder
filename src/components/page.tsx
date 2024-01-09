import alinea from "alinea";
import { ContentBlock, Content } from "./blocks/content";
import { HeaderBlock, Header } from "./blocks/header";

export const PageSchema = alinea.type('Page', {
    title: alinea.text('Title'),
    slug: alinea.text('Slug'),
    blocks: alinea.list('Blocks', {
      schema: alinea.schema({
        Text: ContentBlock,
        Header: HeaderBlock
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
                        return <Content block={block} />
                    case 'Header':
                        return <Header block={block} />
                    default:
                        return null
                }
            })}
        </main>
    )
}