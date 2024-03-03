import { Config, Infer } from "alinea";
import { BasicBlock, Block } from "./block";
import { Meta } from "../meta";
import { RichTextBox, RichTextBoxExtension, RichTextContent } from "./elements/richTextContent";

export const FormHeaderBlock = Config.type("🏁 Form Header", {
  fields: {
    ...BasicBlock,
    content: RichTextBox,    
  },
});

export type FormHeaderBlock = Infer<typeof FormHeaderBlock>;

export function FormHeader({
  block,
  meta,
}: {
  block: FormHeaderBlock;
  meta: Meta;
}) {
  return (
    <Block
      block={block}
      meta={meta}
      blockClassName="py-20 px-16 !pt-56"
      itemsClassName="ds-stack-16 container !pt-0 !pb-0"
    >
      <RichTextContent
        h1={<h1 className="ds-heading-02-reg" />}
        h2={<h1 className="ds-heading-03-reg" />}
        content={block.content}
        blocks={RichTextBoxExtension}
      />
    </Block>
  );
}
