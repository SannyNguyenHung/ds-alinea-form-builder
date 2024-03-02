import { Config, Field, Infer } from "alinea";

export const RadioElementSchema = Config.type("🔘 Radio", {
  fields: {
    name: Field.text("Name"),
    text: Field.text("Text"),
    value: Field.text("Value"),
    required: Field.text("Required Text", {
      initialValue: "Fehler: Bitte treffen Sie eine Auswahl.",
    }),
  },
});

export type RadioElementSchema = Infer<typeof RadioElementSchema>;
