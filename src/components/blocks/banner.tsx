import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { RichTextBox, RichTextContent, RichTextBoxExtension } from './elements/richTextContent';

export const BannerBlock = alinea.type('🏳 Banner', {
  ...BasicBlock,
  content: RichTextBox
});

export type BannerBlock = alinea.infer<typeof BannerBlock>;

export function Banner({ block }: { block: BannerBlock }) {
  return (
    <Block
      blockClassName='!pt-0 !pb-0'
      itemsClassName='container !pt-16 !pb-16 ds-stack-8'
      block={block}>
      <RichTextContent
        content={block.content}
        blocks={RichTextBoxExtension}
      />
    </Block>
  )
}