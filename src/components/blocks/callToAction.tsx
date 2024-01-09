import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { RichTextBox, RichTextContent, RichTextBoxExtension } from './elements/richTextContent';


export const CallToActionBlock = alinea.type('💥 Call to action', {
  ...BasicBlock,
  content: RichTextBox
});

export type CallToActionBlock = alinea.infer<typeof CallToActionBlock>;

export function CallToAction({ block }: { block: CallToActionBlock }) {
  return (
    <Block
      blockClassName='overflow-x-hidden rounded-lg'
      itemsClassName='container !pt-16 !pb-16'
      block={block}>
      <RichTextContent
        content={block.content}
        blocks={RichTextBoxExtension}
      />
    </Block>
  )
}