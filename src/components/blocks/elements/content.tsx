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
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        a,
        p,
        blocks
    }: {
        content: TextDoc<{}>,
        h1?: ReactElement,
        h2?: ReactElement,
        h3?: ReactElement,
        h4?: ReactElement,
        h5?: ReactElement,
        h6?: ReactElement,
        a?: ReactElement,
        p?: ReactElement,
        blocks?: {
            [key: string]: ReactElement
        }
    }) {
    console.log(blocks)
    return (<RichText
        p={<p className="text-lg" />}
        h1={h1 ?? <h1 className="ds-heading-01-reg" />}
        h2={h2 ?? <h2 className="ds-heading-02-reg" />}
        h3={h3 ?? <h3 className="ds-heading-03-reg" />}
        h4={h4 ?? <h4 className="ds-heading-04-reg" />}
        h5={h5 ?? <h5 className="ds-heading-05-reg" />}
        h6={h6 ?? <h6 className="ds-heading-06-reg" />}
        a={a ?? <a className="text-link" />}
        doc={content}

        {...blocks}

    />);
}