import { Uid } from "sequential-workflow-designer";
import { SwitchStep, TaskStep } from "./model";

export function createTaskStep(name: string): TaskStep {
	return {
		id: Uid.next(),
		componentType: "task",
		type: "task",
		name: name,
		properties: {}
	};
}

export function createSwitchStep(name: string): SwitchStep {
	return {
		id: Uid.next(),
		componentType: "switch",
		type: "switch",
		name: name,
		properties: {},
		branches: {
			true: [],
			false: []
		}
	};
}