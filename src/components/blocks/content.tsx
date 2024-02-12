import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextBox, RichTextContent, RichTextBoxExtension } from "./elements/richTextContent";
import { Meta } from "../contentBlockMap";


export const ContentBlock = alinea.type("📝 Text", {
  ...BasicBlock,
  content: RichTextBox
});

export type ContentBlock = alinea.infer<typeof ContentBlock>;

export function Content({ block, meta }: { block: ContentBlock, meta: Meta }) {
  return (
    <Block
      blockClassName="!pt-0 !pb-0"
      itemsClassName="container !pt-32 !pb-40 ds-stack-8"
      block={block}
      meta={meta}>
      <RichTextContent
        content={block.content}
        blocks={RichTextBoxExtension}
      />
    </Block>
  )
}