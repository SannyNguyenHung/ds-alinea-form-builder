"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Step, StepsConfiguration, ToolboxConfiguration, ValidatorConfiguration } from "sequential-workflow-designer";
import { SequentialWorkflowDesigner, wrapDefinition } from "sequential-workflow-designer-react";
import { RootEditor } from "./rootEditor";
import { StepEditor } from "./stepEditor";
import { createSwitchStep, createTaskStep } from "./stepUtils";
import { useSequentialWorkflowDesignerController } from "sequential-workflow-designer-react";
import { FlowDefinition } from "./model";

// const startDefinition: FlowDefinition = {
// 	properties: {
// 		alfa: "bravo"
// 	},
// 	sequence: [createTaskStep(), createSwitchStep()]
// };

export function WorkflowEditor({steps, path}: {steps: string[], path: string}) {
	const controller = useSequentialWorkflowDesignerController();

	const toolboxConfiguration: ToolboxConfiguration = useMemo(
		() => ({
			groups: [{ name: "Flow Pages", steps: steps.map(step => createTaskStep(step)) }]
		}),
		[]
	);
	const stepsConfiguration: StepsConfiguration = useMemo(
		() => ({
			iconUrlProvider: () => null
		}),
		[]
	);
	const validatorConfiguration: ValidatorConfiguration = useMemo(
		() => ({
			step: (step: Step) => Boolean(step.name),
			root: (definition: FlowDefinition) => Boolean(definition.properties.alfa)
		}),
		[]
	);

	const [definition, setDefinition] = useState(() => wrapDefinition({
		properties: {
			alfa: "bravo"
		},
		sequence: steps.map(step => createTaskStep(step)),
	}));
	
	useEffect(() => {
		console.log(`definition updated, isValid=${definition.isValid}`);
	}, [definition]);

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
			<form onSubmit={onSubmit}>
				<button className="ds-button" type="submit">Speichern</button>
			</form>
			<SequentialWorkflowDesigner
					undoStackSize={10}
					definition={definition}
					onDefinitionChange={setDefinition}
					toolboxConfiguration={toolboxConfiguration}
					stepsConfiguration={stepsConfiguration}
					validatorConfiguration={validatorConfiguration}
					controlBar={true}
					rootEditor={<RootEditor />}
					stepEditor={<StepEditor />}
					controller={controller}
					
			/>
		</>
	);
}