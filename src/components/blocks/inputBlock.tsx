"use client"

import { FormEvent } from "react"
import { Block } from "./block"
import { RichTextContent, RichTextBoxExtension } from "./elements/richTextContent"
import { InputBlock } from "./input"

export function Input({ block }: { block: InputBlock }) {
    async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()

        const formData = new FormData(event.currentTarget)
		const response = await fetch('/api/form', {
			method: 'POST',
			body: formData,
		})
		/// const result = await response.json()
		// Handle response if necessary
		//const data = await response.json()
		// ...
	}
    
    return (
        <Block
            block={block}
            blockClassName="!pt-0 !pb-0"
            itemsClassName="ds-stack-8 container !pt-0 !pb-0"
        >
            <form onSubmit={onSubmit}>
                <RichTextContent
                    content={block.content}
                    blocks={RichTextBoxExtension}
                />
            </form>
        </Block>
    )
}