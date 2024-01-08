import alinea, { TextDoc } from 'alinea'
import { RichText } from 'alinea/ui'

import { Text, TextSchema } from './text';


export const RichTextBox = alinea.richText('Text', {
    schema: alinea.schema({
        Text: TextSchema,
    }),        
})

export function Content({content} : {content: TextDoc<{}>}) {
    console.log(content)
    return (<RichText
        p={<p className="text-lg" />}
        h1={<h1 className="ds-heading-01-reg" />}
        h2={<h2 className="ds-heading-02-reg" />}
        h3={<h3 className="ds-heading-03-reg" />}
        h4={<h4 className="ds-heading-04-reg" />}
        h5={<h5 className="ds-heading-05-reg" />}
        h6={<h6 className="ds-heading-06-reg" />}
        a={<a className="text-link" />}
        doc={content}

        Text={Text}
    />);
}