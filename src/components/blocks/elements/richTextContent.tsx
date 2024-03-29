import { Field, TextDoc } from "alinea";
import { RichText } from "alinea/ui";
import { ReactElement } from "react";
import { TextElement, TextElementSchema } from "./TextElement";
import { ButtonsElement, ButtonsElementSchema } from "./ButtonsElement";
import { HintElement, HintElementSchema } from "./HintElement";
import { RadioElement } from "./RadioElement";
import { RadioElementSchema } from "./RadioElement.schema";

export const RichTextBox = Field.richText("Text", {
  schema: {
    Text: TextElementSchema,
    Button: ButtonsElementSchema,
    Hint: HintElementSchema,
    Radio: RadioElementSchema,
  },
});

export const RichTextBoxExtension = {
  Text: TextElement,
  Button: ButtonsElement,
  Hint: HintElement,
  Radio: RadioElement,
};

export function RichTextContent({
  content,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  a,
  p,
  blocks,
}: {
  content: TextDoc<{}>;
  h1?: ReactElement;
  h2?: ReactElement;
  h3?: ReactElement;
  h4?: ReactElement;
  h5?: ReactElement;
  h6?: ReactElement;
  ul?: ReactElement;
  li?: ReactElement;
  a?: ReactElement;
  p?: ReactElement;
  blocks?: {
    [key: string]: any;
  };
}) {
  return (
    <RichText
      p={p ?? <p className="text-lg" />}
      h1={h1 ?? <h1 className="ds-heading-01-reg" />}
      h2={h2 ?? <h2 className="ds-heading-02-reg" />}
      h3={h3 ?? <h3 className="ds-heading-03-reg" />}
      h4={h4 ?? <h4 className="ds-heading-04-reg" />}
      h5={h5 ?? <h5 className="ds-heading-05-reg" />}
      h6={h6 ?? <h6 className="ds-heading-06-reg" />}
      ul={ul ?? <ul />}
      li={li ?? <li />}
      a={a ?? <a className="text-link" />}
      doc={content}
      // Custom extensions
      {...blocks}
    />
  );
}
