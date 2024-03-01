import { Config, Field, Infer } from "alinea"

export const ButtonsElementSchema = Config.type("🔵 Buttons", { fields: {
    items: Field.list("Buttons", {
        schema: {
            Button: Config.type("Button", { fields: {
                text: Field.text("Text"),
                link: Field.link("Link"),
                // Make this selectable
                apiFunction: Field.text("Api Function"),
                look: Field.select("Look", { options: {
                    "": "Primary",
                    "ds-button-secondary": "Secondary",
                    "ds-button-tertiary": "Tertiary",
                    "ds-button-ghost": "Ghost",
                }}),
                size: Field.select("Size", { options: {
                    "": "Default",
                    "ds-button-large": "Large",
                    "ds-button-small": "Small",
                }}),
            }})
        }
    }),
}})

export type ButtonsElementSchema = Infer<typeof ButtonsElementSchema>;

export function ButtonsElement({ items }: ButtonsElementSchema) {
    return <div className="flex flex-wrap gap-24 pt-32">
                { 
                    items?.map((item, index) => 
                        { return item.apiFunction ?
                            <button key={`${item._id}-${index}-submit`} type="submit" name="_action" value={item.apiFunction} className={["ds-button", item.look, item.size].join(" ")}>
                                <span className="ds-button-label">{item.text}</span>
                            </button> 
                            :
                            <a key={`${item._id}-${index}-link`} href={item.link.href} className={["ds-button", item.look, item.size].join(" ")} role="button">
                                <span className="ds-button-label">{item.text}</span>
                            </a>
                        }
                    )
                }
            </div>
}