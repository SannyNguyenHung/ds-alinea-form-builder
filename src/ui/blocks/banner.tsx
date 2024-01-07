import alinea from 'alinea'
import { BasicBlock } from './basic';
import { Content } from './components/content';


export const BannerBlock = alinea.type('🚩 Banner', {
    ...BasicBlock,
    content: alinea.richText('Text'),
});
export type BannerBlock = alinea.infer<typeof BannerBlock>;

export function create(banner: BannerBlock) {
    return (
        <div>
            <Content content={banner.content} />
        </div>
    )
}