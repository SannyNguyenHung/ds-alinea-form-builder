import { Field, Config, Infer } from "alinea"

export const TextElementSchema = Config.type("🔤 Text", {
    fields: {
        look: Field.select("Look", {
            options: {
                "default": "Default",
                "ds-heading-01-reg": "Heading 1",
                "ds-heading-02-reg": "Heading 2",
                "ds-heading-03-reg": "Heading 3",
                "ds-heading-03-bold": "Heading 3 bold",
                "ds-subhead": "Subhead",
                "ds-label-01-reg": "Label 1",
                "ds-label-01-bold": "Label 1 bold",
                "ds-label-02-reg": "Label 2",
                "ds-label-02-bold": "Label 2 bold",
                "ds-label-03-reg": "Label 3",
                "ds-label-03-bold": "Label 3 bold",
                "ds-label-selection": "Label selection",
                "ds-body-01-reg": "Body 1",
                "ds-body-02-reg": "Body 2",
            }
        }),
        text: Field.text("Text"),
        tag: Field.select("Tag", {
            options: {
                "p": "p",
                "div": "div",
                "h1": "h1",
                "h2": "h2",
                "h3": "h3",
                "h4": "h4",
                "h5": "h5",
                "h6": "h6",
            }
        })
    }
})

export type TextElementSchema = Infer<typeof TextElementSchema>;

export function TextElement({ look, text, tag = "p" }: TextElementSchema) {
    const Tag = tag as keyof React.JSX.IntrinsicElements;
    return (<Tag className={look ?? ""}>{text}</Tag>)
}