import { Config, Infer } from "alinea";
import { BasicBlock } from "./block";
import { RichTextBox } from "./elements/richTextContent";

export const InputBlock = Config.type("✍🏿 Input", {
  fields: {
    ...BasicBlock,
    content: RichTextBox,
  },
});

export type InputBlock = Infer<typeof InputBlock>;
