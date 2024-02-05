import alinea from "alinea"

export const RadioElementSchema = alinea.type("🔘 Radio", {
    name: alinea.text("Name"),
    text: alinea.text("Text"),
    group: alinea.text("Group"),
})

export type RadioElementSchema = alinea.infer<typeof RadioElementSchema>;
  
export function RadioElement({name, text, group} : RadioElementSchema) {
    return (
        <div className="flex flex-wrap pt-8">
            <input type="radio" id={group} name={group} value={name} className="ds-radio"></input>
            <label htmlFor={name}>{text}</label>
        </div>
    )
}