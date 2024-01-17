import alinea from "alinea"

export const ButtonElementSchema = alinea.type("🔵 Button", {
    text: alinea.text("Text"),
    href: alinea.link("Link"),
    look: alinea.select("Look", {
        "": "Primary",
        "ds-button-secondary" : "Secondary",
        "ds-button-tertiary" : "Tertiary",
        "ds-button-ghost" : "Ghost",
    }),
    size: alinea.select("Size", {
        "": "Default",
        "ds-button-large": "Large",
        "ds-button-small": "Small",
    }),
})

export type ButtonElementSchema = alinea.infer<typeof ButtonElementSchema>;
  
export function ButtonElement({look, text, href, size} : ButtonElementSchema) {
    return (
    <div className="flex flex-wrap gap-24 pt-16">
        <a href={href.url} className={["ds-button", look, size].join(" ")} role="button">
            <span className="ds-button-label">{text}</span> 
        </a>
    </div>
    )
}