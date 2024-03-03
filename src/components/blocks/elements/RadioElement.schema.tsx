import { Config, Field, Infer } from "alinea";

export const RadioElementSchema = Config.type("🔘 Radio", {
  fields: {
    text: Field.text("Text"),
    value: Field.text("Value"),
    required: Field.check("Required")
  },
});

export type RadioElementSchema = Infer<typeof RadioElementSchema>;
