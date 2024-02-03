"use client";

import { useEffect, useMemo, useState } from "react";
import { ObjectCloner, Step, StepsConfiguration, ToolboxConfiguration, ValidatorConfiguration } from "sequential-workflow-designer";
import { SequentialWorkflowDesigner, wrapDefinition } from "sequential-workflow-designer-react";
import { RootEditor } from "./rootEditor";
import { StepEditor } from "./stepEditor";
import { createSwitchStep, createTaskStep } from "./stepUtils";
import { useSequentialWorkflowDesignerController } from "sequential-workflow-designer-react";
import { FlowDefinition } from "./model";

const startDefinition: FlowDefinition = {
	properties: {
		alfa: "bravo"
	},
	sequence: [createTaskStep(), createSwitchStep()]
};

export function WorkflowEditor() {
	const controller = useSequentialWorkflowDesignerController();
	const toolboxConfiguration: ToolboxConfiguration = useMemo(
		() => ({
			groups: [{ name: "Steps", steps: [createTaskStep(), createSwitchStep()] }]
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

	const [isVisible, setIsVisible] = useState(true);
	const [isToolboxCollapsed, setIsToolboxCollapsed] = useState(false);
	const [isEditorCollapsed, setIsEditorCollapsed] = useState(false);
	const [definition, setDefinition] = useState(() => wrapDefinition(startDefinition));
	const [selectedStepId, setSelectedStepId] = useState<string | null>(null);
	const [isReadonly, setIsReadonly] = useState(false);
	const definitionJson = JSON.stringify(definition.value, null, 2);

	useEffect(() => {
		console.log(`definition updated, isValid=${definition.isValid}`);
	}, [definition]);

	function toggleVisibilityClicked() {
		setIsVisible(!isVisible);
	}

	function toggleSelectionClicked() {
		const id = definition.value.sequence[0].id;
		setSelectedStepId(selectedStepId ? null : id);
	}

	function toggleIsReadonlyClicked() {
		setIsReadonly(!isReadonly);
	}

	function toggleToolboxClicked() {
		setIsToolboxCollapsed(!isToolboxCollapsed);
	}

	function toggleEditorClicked() {
		setIsEditorCollapsed(!isEditorCollapsed);
	}

	function moveViewportToFirstStepClicked() {
		const fistStep = definition.value.sequence[0];
		if (fistStep) {
			controller.moveViewportToStep(fistStep.id);
		}
	}

	function reloadDefinitionClicked() {
		const newDefinition = ObjectCloner.deepClone(startDefinition);
		setDefinition(wrapDefinition(newDefinition));
	}

	function yesOrNo(value: boolean) {
		return value ? "✅ Yes" : "⛔ No";
	}

	return (
		<>
			{isVisible && (
				<SequentialWorkflowDesigner
					undoStackSize={10}
					definition={definition}
					onDefinitionChange={setDefinition}
					selectedStepId={selectedStepId}
					isReadonly={isReadonly}
					onSelectedStepIdChanged={setSelectedStepId}
					toolboxConfiguration={toolboxConfiguration}
					isToolboxCollapsed={isToolboxCollapsed}
					onIsToolboxCollapsedChanged={setIsToolboxCollapsed}
					stepsConfiguration={stepsConfiguration}
					validatorConfiguration={validatorConfiguration}
					controlBar={true}
					rootEditor={<RootEditor />}
					stepEditor={<StepEditor />}
					isEditorCollapsed={isEditorCollapsed}
					onIsEditorCollapsedChanged={setIsEditorCollapsed}
					controller={controller}
					
				/>
			)}
		</>
	);
}