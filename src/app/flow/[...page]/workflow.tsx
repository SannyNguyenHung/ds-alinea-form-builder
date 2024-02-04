"use client";

import { useEffect, useMemo, useState } from "react";
import { Step, StepsConfiguration, ToolboxConfiguration, ValidatorConfiguration } from "sequential-workflow-designer";
import { SequentialWorkflowDesigner, wrapDefinition } from "sequential-workflow-designer-react";
import { RootEditor } from "./rootEditor";
import { StepEditor } from "./stepEditor";
import {  createTaskStep } from "./stepUtils";
import { useSequentialWorkflowDesignerController } from "sequential-workflow-designer-react";
import { FlowDefinition } from "./model";

export function WorkflowEditor({steps, flowDefinition, path}: {steps: string[], flowDefinition: FlowDefinition, path: string}) {
	const controller = useSequentialWorkflowDesignerController();
	console.log("FlowDefinition", flowDefinition);

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
			root: (definition: FlowDefinition) => Boolean(definition.properties)
		}),
		[]
	);

	const [definition, setDefinition] = useState(() => wrapDefinition(flowDefinition));
	
	useEffect(() => {
		console.log(`definition updated, isValid=${definition.isValid}`);
	}, [definition]);
	
	return (
		<>
			<SequentialWorkflowDesigner
					undoStackSize={10}
					definition={definition}
					onDefinitionChange={setDefinition}
					toolboxConfiguration={toolboxConfiguration}
					stepsConfiguration={stepsConfiguration}
					validatorConfiguration={validatorConfiguration}
					controlBar={true}
					rootEditor={<RootEditor path={path} definition={definition} />}
					stepEditor={<StepEditor />}
					controller={controller}
					
			/>
		</>
	);
}
