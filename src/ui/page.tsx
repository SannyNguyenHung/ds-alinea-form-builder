import alinea from "alinea";
import { BannerBlock, Banner } from "./blocks/banner";

export const PageSchema = alinea.type('Page', {
    title: alinea.text('Title'),
    slug: alinea.text('Slug'),
    blocks: alinea.list('Blocks', {
      schema: alinea.schema({
        Banner: BannerBlock
      })
    })
  });

export type Page = alinea.infer<typeof PageSchema>;

export default function Page({page} : {page: Page}) {
    return (
        <main className="">
            {page.blocks.map(block => {
                switch (block.type) {
                    case 'Banner':
                        return <Banner block={block} />
                    default:
                        return null
                }
            })}
        </main>
    )
}