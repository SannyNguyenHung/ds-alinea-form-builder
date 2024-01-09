import alinea from 'alinea'
import { BasicBlock, Block } from './block';
import { RichTextContent, RichTextBox, RichTextBoxExtension } from './elements/richTextContent';
import Image from 'next/image'

export const LogoBannerBlock = alinea.type('🖼️ Logo Banner', {
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

export type LogoBannerBlock = alinea.infer<typeof LogoBannerBlock>;

function Logo({ block }: { block: LogoBannerBlock }) {
    return (
        <div className="ds-stack-16">
            <p className="ds-label-section pt-4 text-gray-800">{block.logo.title}</p>
            <a href="/">
                <Image className="w-[160px]" src={block.logo.image.src} width="240" height="132" alt=""></Image>
            </a>
        </div>
    )
}

export function LogoBanner({ block }: { block: LogoBannerBlock }) {

    return (
        <Block
            block={block}
            blockClassName='py-20 px-16 !pt-64 !pb-64'
            itemsClassName='ds-stack-16 container !pt-0 !pb-0'
        >
            <div className="flex flex-row items-start gap-32 max-[499px]:flex-col">
                <Logo block={block}></Logo>
                <div className="ds-stack-8 break-words w-full">
                    <RichTextContent
                        h2={<h2 className="ds-label-01-bold"></h2>}
                        a={<a className="ds-label-01-bold no-underline hover:underline mr-8 text-black focus:outline active:underline active:decoration-4"></a>}
                        content={block.content}
                        blocks={RichTextBoxExtension}
                    />
                </div>
            </div>
        </Block>
    )
}