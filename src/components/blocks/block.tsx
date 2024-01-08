import alinea from 'alinea'
import { ReactNode } from 'react';

export function Block({block, children} : {block: BasicBlock, children: ReactNode}) {
    const background = block.background + " " + (block.background === "bg-blue-800" ? "text-white" : "");
    const template = block.template;

    const css = ["ds-block", background, template].join(" ");

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
        "ds-block": "Default",
        "ds-hero": "Hero",
        "ds-header": "Header",
        "ds-banner": "Banner",
    }),
});

export type BasicBlock = alinea.infer<typeof BasicBlock>;