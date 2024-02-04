import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextContent, RichTextBox, RichTextBoxExtension } from "./elements/richTextContent";

export const InputBlock = alinea.type("✍🏿 Input", {
    ...BasicBlock,
    content: RichTextBox
});

export type InputBlock = alinea.infer<typeof InputBlock>;

export function Input({ block }: { block: InputBlock }) {

    return (
        <Block
            block={block}
            blockClassName="py-20 px-16 !pt-56 !pb-64"
            itemsClassName="ds-stack-16 container !pt-0 !pb-0"
        >
            <RichTextContent
                content={block.content}
                blocks={RichTextBoxExtension}
            />
        </Block>
    )
}