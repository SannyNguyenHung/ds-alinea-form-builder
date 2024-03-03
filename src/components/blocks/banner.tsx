import { Config, Infer } from "alinea";
import { BasicBlock, Block } from "./block";
import {
  RichTextBox,
  RichTextContent,
  RichTextBoxExtension,
} from "./elements/richTextContent";
import { Meta } from "../meta";

export const BannerBlock = Config.type("🏳 Banner", {
  fields: {
    ...BasicBlock,
    content: RichTextBox,
  },
});

export type BannerBlock = Infer<typeof BannerBlock>;

export function Banner({ block, meta }: { block: BannerBlock; meta: Meta }) {
  return (
    <Block
      blockClassName="!pt-0 !pb-0"
      itemsClassName="container !pt-16 !pb-16 ds-stack-8"
      block={block}
      meta={meta}
    >
      <RichTextContent content={block.content} blocks={RichTextBoxExtension} />
    </Block>
  );
}
