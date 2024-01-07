import { TextDoc } from 'alinea'
import { RichText } from 'alinea/ui'


export function Content({content} : {content: TextDoc<{}>}) {
    return (<RichText
        doc={content}
    />);
}