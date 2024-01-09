import alinea from 'alinea'
import { ReactNode } from 'react';

export function Block({block, blockClassName, itemsClassName, children} : {block: BasicBlock, blockClassName?: string, itemsClassName?: string, children: ReactNode}) {
    const background = block.background + " " + (block.background === "bg-blue-800" ? "text-white" : "");

    const css = ["ds-block", background, blockClassName].join(" ");

    return (
        <div className={css}>
            <div className={["ds-block-items", itemsClassName].join(" ")}>
                {children}
            </div>
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
});

export type BasicBlock = alinea.infer<typeof BasicBlock>;