import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { RichTextContent } from './elements/richTextContent';
import { RichTextBox, RichTextTextExtension } from './content';

export const HeaderBlock = alinea.type('📰 Header', {
    ...BasicBlock,
    content: RichTextBox
});

export type HeaderBlock = alinea.infer<typeof HeaderBlock>;

export function Header({ block }: { block: HeaderBlock }) {
    return (
        <Block
            block={block}
            blockClassName='py-20 px-16'
        >
            <RichTextContent
                a={<a className="ds-label-01-bold no-underline hover:underline mr-8 text-black focus:outline active:underline active:decoration-4"></a>}
                content={block.content}
                blocks={RichTextTextExtension}
            />
        </Block>
    )
}