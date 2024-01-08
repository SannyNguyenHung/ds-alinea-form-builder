import alinea from 'alinea'
import { ReactNode } from 'react';

const templates = {
    "": "p-4",
    "hero": "p-4",
    "subhero": "p-4",
    "banner": "p-4",
    "box": "p-4",
}

export function Block({block, children} : {block: BasicBlock, children: ReactNode}) {
    const background = block.background + " " + (block.background === "bg-blue-800" ? "text-white" : "");
    const fullWidth = block.fullWidth ? "w-full" : "max-w-3xl mx-auto";
    const template = block.template;

    const css = [background, fullWidth].join(" ");

    return (
        <div className={css}>
            {children}
        </div>
    )
}

export const BasicBlock = alinea.type('Block', {
    fullWidth: alinea.check('Full width'),
    background: alinea.select('Background', {
        "bg-white": "White", // before:bg-white
        "bg-blue-100": "Blue", // before:bg-blue-100
        "bg-blue-300": "MidBlue", // before:bg-blue-300
        "bg-blue-800": "DarkBlue", // before:bg-blue-800
        "bg-yellow-300": "Yellow", // before:bg-yellow-300
        "bg-green-200": "Green", // before:bg-green-200
        "bg-[#f9e5ec]": "Red", // before:bg-[#f9e5ec]
    }),
    template: alinea.select('Template', {
        "": "Default",
        "hero": "Hero",
        "subhero": "Subhero",
        "banner": "Banner",
        "box": "Box",
    }),
});

export type BasicBlock = alinea.infer<typeof BasicBlock>;