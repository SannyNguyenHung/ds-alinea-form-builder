import alinea from 'alinea'
import { BasicBlock, Block } from './basic';
import { Content } from './elements/content';


export const BannerBlock = alinea.type('🚩 Banner', {
    ...BasicBlock,
    content: alinea.richText('Text'),
});

export type BannerBlock = alinea.infer<typeof BannerBlock>;

export function Banner({block}:{block: BannerBlock}) {
    return (
        <Block block={block}>
            <Content content={block.content} />
        </Block>
    )
}