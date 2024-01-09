import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { RichTextContent } from './elements/richTextContent';
import { Text as TextElement, TextExtensionSchema } from './elements/richTextTextExtension';


export const RichTextBox = alinea.richText('Text', {
  schema: alinea.schema({
      Text: TextExtensionSchema,
  }),
})

export const ContentBlock = alinea.type('📝 Text', {
    ...BasicBlock,
    content: RichTextBox
});

export type ContentBlock = alinea.infer<typeof ContentBlock>;

export function Content({ block }: { block: ContentBlock }) {
    return (
        <Block block={block}>
            <RichTextContent
                content={block.content}
                blocks={{ Text: TextElement }}
            />
        </Block>
    )
}