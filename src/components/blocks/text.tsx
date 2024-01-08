import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { Content } from './elements/content';


export const TextBlock = alinea.type('📝 Text', {
    ...BasicBlock,
    content: alinea.richText('Text'),
});

export type TextBlock = alinea.infer<typeof TextBlock>;

export function Text({block}:{block: TextBlock}) {
    return (
        <Block block={block}>
            <Content content={block.content} />
        </Block>
    )
}