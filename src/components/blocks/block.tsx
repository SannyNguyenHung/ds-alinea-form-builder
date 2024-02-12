import alinea from "alinea"
import { ReactNode } from "react";
import { BlockBackgroundColors } from "./elements/colors";
import { Meta } from "../contentBlockMap";

export function Block({ block, blockClassName, itemsClassName, meta, children }: { block: BasicBlock, blockClassName?: string, itemsClassName?: string, meta: Meta, children: ReactNode }) {
    const background = (block.background ?? "") + (block.background === "bg-blue-800" ? " text-white" : "");
    const cssBlock = ["ds-block", background, blockClassName].join(" ");
    const cssItems = ["ds-block-items", itemsClassName].join(" ");

    return (
        <div className={cssBlock}>
            <div className={cssItems}>
                {children}
            </div>
        </div>
    )
}

export const BasicBlock = alinea.type("Block", {
    background: alinea.select("Background", BlockBackgroundColors),
});

export type BasicBlock = alinea.infer<typeof BasicBlock>;