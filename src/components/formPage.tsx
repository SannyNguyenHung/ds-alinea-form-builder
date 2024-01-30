import alinea from "alinea";
import { ContentBlock, Content } from "./blocks/content";
import { CallToAction, CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";

export const FormPageSchema = alinea.type("FormPage", {
    title: alinea.text("Title"),
    slug: alinea.text("Slug"),
    blocks: alinea.list("Blocks", {
      schema: alinea.schema({
        Text: ContentBlock,
        CallToAction: CallToActionBlock
      })
    }),
    [alinea.meta]: {
      contains: ["FormPageSchema"],
      isContainer: true
    }
});

export type FormPage = alinea.infer<typeof FormPageSchema>;

// Refactor this to use a map of components
function MapBlock({block} : {block: any}) {
    switch (block.type) {
        case "Text":
            return <Content block={block} />
        case "CallToAction":
            return <CallToAction block={block} />
    }
    return <>Error</>
}

export async function Blocks({page} : {page: FormPage}) {
    
    return (
        <div className="">
            {page?.blocks?.map(block => <MapBlock key={uuidv4()} block={block} />)}            
        </div>
    )
}