import alinea from "alinea"
import { FaRegBell } from "react-icons/fa";


export const HintElementSchema = alinea.type("⚠️ Hint", {
    title: alinea.text("Title"),
    text: alinea.text("Text"),
});


export type HintElementSchema = alinea.infer<typeof HintElementSchema>;

export function HintElement({ title, text }: HintElementSchema) {

    return (
        <div className="ds-stack-4 !mt-32 !mb-16 container-mr rounded-lg bg-yellow-300 md:max-w-[630px]">
            <div className="flex flex-row gap-[8px] items-center">
                <FaRegBell />
                <h2 className="">{title}</h2>
            </div>
            <p className="text-lg">{text}</p>
        </div>
    )
}