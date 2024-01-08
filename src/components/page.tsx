import alinea from "alinea";
import { TextBlock, Text } from "./blocks/textblock";

export const PageSchema = alinea.type('Page', {
    title: alinea.text('Title'),
    slug: alinea.text('Slug'),
    blocks: alinea.list('Blocks', {
      schema: alinea.schema({
        Text: TextBlock
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
                        return <Text block={block} />
                    default:
                        return null
                }
            })}
        </main>
    )
}