import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { Content, RichTextBox } from './elements/content';
import { Text as TextElement } from './elements/text';


export const TextBlock = alinea.type('📝 Text', {
    ...BasicBlock,
    content: RichTextBox
});

export type TextBlock = alinea.infer<typeof TextBlock>;

export function Text({block}:{block: TextBlock}) {
    return (
        <Block block={block}>
            <Content content={block.content} blocks={{Text:TextElement}} />
        </Block>
    )
}