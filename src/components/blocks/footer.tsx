import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextContent, RichTextBox, RichTextBoxExtension } from "./elements/richTextContent";

export const FooterBlock = alinea.type("🦶 Footer", {
    ...BasicBlock,
    logo: alinea.object("Logo", {
        fields: alinea.type("Parameters", {
            title: alinea.text("Title"),
            image: alinea.image("Image"),
            alt: alinea.text("Alt Text"),
        })
    }),
    content: RichTextBox,
    linkList: alinea.link.multiple("Link List"),
});

export type FooterBlock = alinea.infer<typeof FooterBlock>;

function Logo({ block }: { block: FooterBlock }) {
    return (
        <div>
            <p className="ds-label-section pt-4 text-gray-800">{block.logo.title}</p>
            <a href="/">
                <img className="w-[120px]" src={block.logo.image.src} width="240" height="132" alt="" />
            </a>
        </div>
    )
}

// This function is used to split the link list into columns with max 3 rows
function getLinkColumns(block: FooterBlock) {
    const linkList = block.linkList;
    const linkListLength = linkList.length;
    const linkListColumns = Math.ceil(linkListLength / 3);
    const linkListColumnLength = Math.ceil(linkListLength / linkListColumns);
    const linkListColumnsArray = [];

    for (let i = 0; i < linkListColumns; i++) {
        linkListColumnsArray.push(linkList.slice(i * linkListColumnLength, (i + 1) * linkListColumnLength));
    }

    return linkListColumnsArray;
}

export function Footer({ block }: { block: FooterBlock }) {
    const linkColumns = getLinkColumns(block);

    return (
        <Block
            block={block}
            blockClassName="text-base"
            itemsClassName="container !pt-48 !pb-48 !pr-0"
        >
            <div className="flex flex-wrap items-start justify-between gap-y-32">
                <div className="flex flex-col flex-col-reverse sm:flex-row gap-y-8 gap-x-16">
                    <Logo block={block}></Logo>
                    <div className="ds-stack-8">
                        <RichTextContent
                            p={<p className="leading-snug"></p>}
                            content={block.content}
                            blocks={RichTextBoxExtension}
                        />
                    </div>
                </div>
                <div className="flex flex-wrap gap-x-32 gap-y-8">
                    {linkColumns.map((linkColumn, index) => {
                        return <ul key={`footer-link-list-${index}`} className="list-none m-0 p-0 ds-stack-8">
                            {
                               linkColumn.map((link, index) => {
                                    return <li className="leading-snug" key={`footer-link-list-cell-${index}`}>
                                        <a href={link.url} className="text-link increase-tap-area">{link.title}</a>
                                    </li>
                                })
                            }
                        </ul>
                    })}
                </div>
            </div>
        </Block>
    )
}

