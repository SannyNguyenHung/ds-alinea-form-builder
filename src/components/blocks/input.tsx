import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextContent, RichTextBox, RichTextBoxExtension } from "./elements/richTextContent";

export const InputBlock = alinea.type("✍🏿 Input", {
    ...BasicBlock,
    content: RichTextBox,
});

export type InputBlock = alinea.infer<typeof InputBlock>;

export function Input({ block }: { block: InputBlock }) {

    return (
        <Block
            block={block}
            blockClassName="!pt-0 !pb-0"
            itemsClassName="ds-stack-8 container !pt-0 !pb-0"
        >
            <RichTextContent
                content={block.content}
                blocks={RichTextBoxExtension}
            />
        </Block>
    )
}