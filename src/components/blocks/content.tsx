import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { RichTextContent } from './elements/richTextContent';
import { Text as TextElement, TextExtensionSchema } from './elements/richTextTextExtension';

export const RichTextBox = alinea.richText('Text', {
  schema: alinea.schema({
    Text: TextExtensionSchema,
  }),
})

export const RichTextTextExtension = {
  Text: TextElement
}

export const ContentBlock = alinea.type('📝 Text', {
  ...BasicBlock,
  content: RichTextBox
});

export type ContentBlock = alinea.infer<typeof ContentBlock>;

export function Content({ block }: { block: ContentBlock }) {
  return (
    <Block
      blockClassName='!pt-0 !pb-0'
      itemsClassName='container !pt-16 !pb-16'
      block={block}>
      <RichTextContent
        content={block.content}
        blocks={RichTextTextExtension}
      />
    </Block>
  )
}