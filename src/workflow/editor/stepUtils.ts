import { Uid } from "sequential-workflow-designer";
import { TaskStep } from "../engine/model";

export function createTaskStep(name: string): TaskStep {
	return {
		id: Uid.next(),
		componentType: "task",
		type: "task",
		name: name,
		properties: {}
	};
}
