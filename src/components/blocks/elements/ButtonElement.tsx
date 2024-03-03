import { Config, Field, Infer } from "alinea";

export const ButtonElementSchema = Config.type("Button", {
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
});

export type ButtonElementSchema = Infer<typeof ButtonElementSchema>;

export function ButtonElement({ text, link, apiFunction, look, size } : ButtonElementSchema) {
    return (
        <div className="flex flex-wrap gap-24 pt-32">
                { apiFunction ? (
                    <button
                        type="submit"
                        name="_action"
                        value={apiFunction}
                        className={["ds-button", look, size].join(" ")}
                    >
                        <span className="ds-button-label">{text}</span>
                    </button>
                ) : (
                    <a
                        href={link?.href}
                        className={["ds-button", look, size].join(" ")}
                        role="button"
                    >
                        <span className="ds-button-label">{text}</span>
                    </a>
                )}
        </div>
    );
}
