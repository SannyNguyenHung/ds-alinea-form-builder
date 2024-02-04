import { ChangeEvent, FormEvent } from "react";
import { WrappedDefinition, useRootEditor } from "sequential-workflow-designer-react";
import { FlowDefinition } from "./model";

export function RootEditor({path, definition}: {path: string, definition: WrappedDefinition}) {
	const { properties, setProperty, isReadonly } = useRootEditor<FlowDefinition>();

	// function onAlfaChanged(e: ChangeEvent) {
	// 	setProperty("alfa", (e.target as HTMLInputElement).value);
	// }
	
	async function onSubmit(event: FormEvent<HTMLFormElement>) {
		event.preventDefault()
	
		const response = await fetch('/api/flow', {
			method: 'POST',
			headers: {
			  'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				path: path,
				definition
			}),
		})
		/// const result = await response.json()
		// Handle response if necessary
		//const data = await response.json()
		// ...
	}

	return (
		<>
			<h2>Root editor</h2>

			{/* <h4>Alfa</h4> */}

			<form onSubmit={onSubmit}>
				<button className="ds-button" type="submit">Speichern</button>
			</form>

			{/* <input type="text" value={properties?.alfa ?? ""} readOnly={isReadonly} onChange={onAlfaChanged} /> */}
		</>
	);
}