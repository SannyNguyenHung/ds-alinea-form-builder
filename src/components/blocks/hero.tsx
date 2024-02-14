import { Config, Infer } from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextContent, RichTextBox, RichTextBoxExtension } from "./elements/richTextContent";
import { Meta } from "../contentBlockMap";

export const HeroBlock = Config.type("🦸 Hero", { fields: {
    ...BasicBlock,
    content: RichTextBox
}});

export type HeroBlock = Infer<typeof HeroBlock>;

export function Hero({ block, meta }: { block: HeroBlock, meta: Meta }) {

    return (
        <Block
            block={block}
            meta={meta}
            blockClassName="py-20 px-16 !pt-56 !pb-64"
            itemsClassName="ds-stack-16 container !pt-0 !pb-0"
        >
            <RichTextContent
                a={<a className="ds-label-01-bold no-underline hover:underline mr-8 text-black focus:outline active:underline active:decoration-4"></a>}
                content={block.content}
                blocks={RichTextBoxExtension}
            />
        </Block>
    )
}