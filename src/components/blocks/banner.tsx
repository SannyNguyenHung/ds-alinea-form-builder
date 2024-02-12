import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextBox, RichTextContent, RichTextBoxExtension } from "./elements/richTextContent";
import { Meta } from "../contentBlockMap";

export const BannerBlock = alinea.type("🏳 Banner", {
  ...BasicBlock,
  content: RichTextBox
});

export type BannerBlock = alinea.infer<typeof BannerBlock>;

export function Banner({ block, meta }: { block: BannerBlock, meta: Meta }) {
  return (
    <Block
      blockClassName="!pt-0 !pb-0"
      itemsClassName="container !pt-16 !pb-16 ds-stack-8"
      block={block}
      meta={meta}
      >
      
      <RichTextContent
        content={block.content}
        blocks={RichTextBoxExtension}
      />
    </Block>
  )
}