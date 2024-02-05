import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { RichTextContent, RichTextBox, RichTextBoxExtension } from "./elements/richTextContent";

export const InputBlock = alinea.type("✍🏿 Input", {
    ...BasicBlock,
    content: RichTextBox,
});

export type InputBlock = alinea.infer<typeof InputBlock>;

