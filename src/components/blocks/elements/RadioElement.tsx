import { Config, Field, Infer } from "alinea"

export const RadioElementSchema = Config.type("🔘 Radio", { fields: {
    name: Field.text("Name"),
    text: Field.text("Text"),
    group: Field.text("Group"),
}});

export type RadioElementSchema = Infer<typeof RadioElementSchema>;
  
export function RadioElement({name, text, group} : RadioElementSchema) {
    return (
        <div className="flex flex-wrap pt-8">
            <input type="radio" id={group} name={group} value={name} className="ds-radio"></input>
            <label htmlFor={name}>{text}</label>
        </div>
    )
}