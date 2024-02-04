import alinea from "alinea"

export const RadioElementSchema = alinea.type("🔘 Radio", {
    id: alinea.text("Id"),
    text: alinea.text("Text"),
})

export type RadioElementSchema = alinea.infer<typeof RadioElementSchema>;
  
export function RadioElement({id, text} : RadioElementSchema) {
    return (
        <div className="flex flex-wrap pt-8">
            <input type="radio" id={id} name="rechtsschutzversicherung" className="ds-radio"></input>
            <label htmlFor={id}>{text}</label>
        </div>
    )
}