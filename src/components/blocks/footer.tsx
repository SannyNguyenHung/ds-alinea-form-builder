import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { RichTextContent, RichTextBox, RichTextBoxExtension } from './elements/richTextContent';

export const FooterBlock = alinea.type('🦶 Footer', {
    ...BasicBlock,
    content: RichTextBox,
    logo: alinea.object('Logo', {
        fields: alinea.type('Parameters', {
            title: alinea.text('Title'),
            image: alinea.image('Image'),
            alt: alinea.text('Alt Text'),
        })
    })
});

export type FooterBlock = alinea.infer<typeof FooterBlock>;

function Logo({ block }: { block: FooterBlock }) {
    return (
        <div>
            <p className="ds-label-section pt-4 text-gray-800">{block.logo.title}</p>
            <a href="/">
                <img className="w-[160px]" src={block.logo.image.src} width="240" height="132" alt="" />
            </a>
        </div>
    )
}

export function Footer({ block }: { block: FooterBlock }) {

    return (
        <Block
            block={block}
            blockClassName='text-base'
            itemsClassName='container !pt-48 !pb-48'
        >
            <div className="flex flex-col flex-col-reverse sm:flex-row gap-y-8 gap-x-16">
                <Logo block={block}></Logo>
                <div className="ds-stack-8 break-words w-full leading-snug pt-4">
                    <RichTextContent
                        p={<p className="col-start-1"></p>}
                        a={<a className="text-link increase-tap-area whitespace-nowrap"></a>}
                        content={block.content}
                        blocks={RichTextBoxExtension}
                        ul={<ul className="list-none m-0 p-0 grid grid-cols-2 gap-4 col-start-2 row-span-2 row-start-1 sm:pt-16"></ul>}
                        li={<li className=""></li>}
                    />
                </div>
            </div>
        </Block>
    )
}