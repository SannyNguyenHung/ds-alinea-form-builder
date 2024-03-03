import { Config, Infer } from "alinea";
import { BasicBlock, Block } from "./block";
import {
  RichTextBox,
  RichTextContent,
  RichTextBoxExtension,
} from "./elements/richTextContent";
import { Meta } from "../meta";

export const ContentBlock = Config.type("📝 Text", {
  fields: {
    ...BasicBlock,
    content: RichTextBox,
  },
});

export type ContentBlock = Infer<typeof ContentBlock>;

export function Content({ block, meta }: { block: ContentBlock; meta: Meta }) {
  return (
    <Block
      blockClassName="!pt-0 !pb-0"
      itemsClassName="container !pt-32 !pb-40 ds-stack-8"
      block={block}
      meta={meta}
    >
      <RichTextContent content={block.content} blocks={RichTextBoxExtension} />
    </Block>
  );
}
