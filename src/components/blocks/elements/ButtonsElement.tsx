import { Config, Field, Infer } from "alinea";
import { ButtonElement } from "./ButtonElement";

export const ButtonsElementSchema = Config.type("🔵 Buttons", {
  fields: {
    items: Field.list("Buttons", {
      schema: {
        Button: Config.type("Button", {
          fields: {
            text: Field.text("Text"),
            link: Field.link("Link"),
            // Make this selectable
            apiFunction: Field.text("Api Function"),
            look: Field.select("Look", {
              options: {
                "": "Primary",
                "ds-button-secondary": "Secondary",
                "ds-button-tertiary": "Tertiary",
                "ds-button-ghost": "Ghost",
              },
            }),
            size: Field.select("Size", {
              options: {
                "": "Default",
                "ds-button-large": "Large",
                "ds-button-small": "Small",
              },
            }),
          },
        }),
      },
    }),
  },
});

export type ButtonsElementSchema = Infer<typeof ButtonsElementSchema>;

export function ButtonsElement({ items }: ButtonsElementSchema) {
  return (
    <div className="flex flex-wrap gap-24 pt-32">
      {items?.map((item, index) => <ButtonElement {...item} key={item._id + "-button-" + index } />)}
    </div>
  );
}
