import { Config, Field, Infer } from "alinea";
import { BasicBlock, Block } from "./block";
import {
  RichTextBox,
  RichTextContent,
  RichTextBoxExtension,
} from "./elements/richTextContent";
import { BlockBackgroundColors } from "./elements/colors";
import { Meta } from "../meta";

export const FlowNavigationBlock = Config.type("💥 Call to action", {
  fields: {
    ...BasicBlock,
    actionBackground: Field.select("Action Background", {
      options: BlockBackgroundColors,
    }),
    content: RichTextBox,
  },
});

export type FlowNavigationBlock = Infer<typeof FlowNavigationBlock>;

export function FlowNavigation({
  block,
  meta,
}: {
  block: FlowNavigationBlock;
  meta: Meta;
}) {
  return (
    <Block
      blockClassName="call-to-action-block !pt-0 !pb-0 mt-16 mb-16"
      itemsClassName={
        (block.actionBackground ?? "") +
        " container py-14 !pt-40 !pb-48 rounded-lg -right-32 -left-32 inset-y-0"
      }
      block={block}
      meta={meta}
    >
      <div className="ds-stack-8">
        <RichTextContent
          content={block.content}
          blocks={RichTextBoxExtension}
        />
      </div>
    </Block>
  );
}
