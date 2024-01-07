import alinea from 'alinea'
import { ReactNode } from 'react';

export function Block({block, children} : {block: BasicBlock, children: ReactNode}) {
    return (
        <div className={block.background}>
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
    })
});

export type BasicBlock = alinea.infer<typeof BasicBlock>;