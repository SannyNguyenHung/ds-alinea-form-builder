import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextContent, RichTextBox, RichTextBoxExtension } from "./elements/richTextContent";
import { FaRegBell } from "react-icons/fa";

export const HintBlock = alinea.type("⚠️ Hint", {
    ...BasicBlock,
    title: alinea.text("Title"),
    content: RichTextBox,
});

export type HintBlock = alinea.infer<typeof HintBlock>;

export function Hint({ block }: { block: HintBlock }) {

    return (
        <Block
            block={block}
            blockClassName="!pt-0 !pb-0"
            itemsClassName="container !pt-0 !pb-40 ds-stack-8"
        >
                <div className="ds-stack-4 container-mr rounded-lg bg-yellow-300 md:max-w-[630px]">
                    <div className="flex flex-row gap-[8px] items-center">
                        <FaRegBell />
                        <h2 className="">{block.title}</h2>
                    </div>
                    <RichTextContent
                        content={block.content}
                        blocks={RichTextBoxExtension}
                    />
                </div>
        </Block>
    )
}