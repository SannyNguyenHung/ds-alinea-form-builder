import alinea from "alinea"

export const ButtonElementSchema = alinea.type("🔵 Button", {
    text: alinea.text("Text"),
    href: alinea.link("Link"),
    // Make this selectable
    apiFunction: alinea.text("Api Function"),
    look: alinea.select("Look", {
        "": "Primary",
        "ds-button-secondary": "Secondary",
        "ds-button-tertiary": "Tertiary",
        "ds-button-ghost": "Ghost",
    }),
    size: alinea.select("Size", {
        "": "Default",
        "ds-button-large": "Large",
        "ds-button-small": "Small",
    }),
})

export type ButtonElementSchema = alinea.infer<typeof ButtonElementSchema>;

export function ButtonElement({ look, text, href, apiFunction, size }: ButtonElementSchema) {
    return (
        <div className="flex flex-wrap gap-24 pt-16">
            {apiFunction ?
                <button type="submit" name="_action" value={apiFunction} className={["ds-button", look, size].join(" ")}>
                    <span className="ds-button-label">{text}</span>
                </button> 
                :
                <a href={href.url} className={["ds-button", look, size].join(" ")} role="button">
                    <span className="ds-button-label">{text}</span>
                </a>
            }
        </div>
    )
}