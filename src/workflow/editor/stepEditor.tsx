import { ChangeEvent } from "react";
import { useStepEditor } from "sequential-workflow-designer-react";
import { FlowStep, TaskStep } from "../engine/model";

export function StepEditor({ conditions }: { conditions: string[] }) {
	const {
		type,
		name,
		step,
		properties,
		isReadonly,
		setName,
		setProperty,
		notifyPropertiesChanged,
		notifyChildrenChanged,
	} = useStepEditor<TaskStep | FlowStep>();

	console.log("step", step);

	function onNameChanged(e: ChangeEvent) {
		setName((e.target as HTMLInputElement).value);
	}

	function onXChanged(e: ChangeEvent) {
		//setProperty("x", (e.target as HTMLInputElement).value);
	}

	function onYChanged(e: ChangeEvent) {
		//properties["y"] = (e.target as HTMLInputElement).value;
		notifyPropertiesChanged();
	}

	function toggleExtraBranch() {
		const switchStep = step as FlowStep;
		if (switchStep.branches["extra"]) {
			delete switchStep.branches["extra"];
		} else {
			switchStep.branches["extra"] = [];
		}
		notifyChildrenChanged();
	}

	const stepHasBranches = "branches" in step;
	console.log(stepHasBranches);

	return (
		<div className="flex flex-col">
			<label className="text-base">Name</label>
			<label>{name}</label>

			{stepHasBranches && Object.entries(step.branches).map(branch => (
				<div key={`branch-${branch[0]}`}>{branch[0]}</div>
			))}

			{/* <h4>X Variable</h4>
			<input type="text" value={properties.x || ""} readOnly={isReadonly} onChange={onXChanged} />

			<h4>Y Variable</h4>
			<input type="text" value={properties.y || ""} readOnly={isReadonly} onChange={onYChanged} />

			{type === "switch" && (
				<>
					<h4>Extra branch</h4>
					<button onClick={toggleExtraBranch} disabled={isReadonly}>
						Toggle branch
					</button>
				</>
			)} */}
		</div>
	);
}
