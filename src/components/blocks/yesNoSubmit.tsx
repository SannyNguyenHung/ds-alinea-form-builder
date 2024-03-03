import { Config, Field, Infer } from "alinea";
import { BasicBlock, Block } from "./block";
import { Meta } from "../meta";
import { RadioElement } from "./elements/RadioElement";

export const YesNoSubmitBlock = Config.type("🔛 Yes No Submit", {
    fields: {
        ...BasicBlock,
        yesLabel: Field.text("Yes Label", {
            initialValue: "Ja",
        }),
        noLabel: Field.text("No Label", {
            initialValue: "Nein",
        })
    },
});

export type YesNoSubmitBlock = Infer<typeof YesNoSubmitBlock>;

export function YesNoSubmit({
    block,
    meta,
}: {
    block: YesNoSubmitBlock;
    meta: Meta;
}) {
    return (
        <Block
            blockClassName="ds-block py-20 px-16 !pt-0"
            itemsClassName="ds-block-items ds-stack-8 container !pt-0 !pb-0"
            block={block}
            meta={meta}
        >
            <RadioElement text={block.yesLabel} value={"yes"} required={true}></RadioElement>
            <RadioElement text={block.noLabel} value={"no"} required={true}></RadioElement>
        </Block>
    );
}