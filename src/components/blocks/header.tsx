import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextContent, RichTextBox, RichTextBoxExtension } from "./elements/richTextContent";
import { Meta } from "../contentBlockMap";

export const HeaderBlock = alinea.type("🤠 Header", {
    ...BasicBlock,
    content: RichTextBox
});

export type HeaderBlock = alinea.infer<typeof HeaderBlock>;

export function Header({ block, meta }: { block: HeaderBlock, meta: Meta }) {
    return (
        <Block
            block={block}
            meta={meta}
            blockClassName="py-20 px-16"
        >
            <RichTextContent
                a={<a className="ds-label-01-bold no-underline hover:underline mr-8 text-black focus:outline active:underline active:decoration-4"></a>}
                content={block.content}
                blocks={RichTextBoxExtension}
            />
        </Block>
    )
}