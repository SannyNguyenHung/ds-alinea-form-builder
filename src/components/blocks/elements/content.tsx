import alinea, { TextDoc } from 'alinea'
import { RichText } from 'alinea/ui'

import { TextSchema } from './text';
import { ReactElement } from 'react';


export const RichTextBox = alinea.richText('Text', {
    schema: alinea.schema({
        Text: TextSchema,
    }),
})

export function Content({
        content,
        blocks
    }: {
        content: TextDoc<{}>,
        blocks?: {
            [key: string]: ReactElement
        }
    }) {
    console.log(blocks)
    return (<RichText        
                doc={content}
                {...blocks}
            />);
}