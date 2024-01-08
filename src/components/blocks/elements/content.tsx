import { TextDoc } from 'alinea'
import { RichText } from 'alinea/ui'

export function Content({content} : {content: TextDoc<{}>}) {
    return (<RichText
        p={<p className="text-lg" />}

        h1={<h1 className="ds-heading-01-reg" />}
        h2={<h1 className="ds-heading-02-reg" />}
        h3={<h1 className="ds-heading-03-reg" />}
        h4={<h1 className="ds-heading-04-reg" />}
        h5={<h1 className="ds-heading-05-reg" />}
        h6={<h1 className="ds-heading-06-reg" />}
        a={<a className="text-link" />}
        

        doc={content}
    />);
}