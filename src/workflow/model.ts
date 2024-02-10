import { Step, BranchedStep, Definition } from "sequential-workflow-designer";

export interface FlowDefinition extends Definition {
	properties: {
		//alfa?: string;
	};	
}

export interface FlowStep extends Step {
	componentType: "task";
	type: "flowStep";
	properties: {
	};
}

export interface FlowStep extends BranchedStep {
	componentType: "task";
	type: "flowStep";
	properties: {};
}

export interface TaskStep extends Step {
	componentType: "task";
	type: "task";
	properties: {
		x?: string;
		y?: string;
	};
}

export interface SwitchStep extends BranchedStep {
	componentType: "switch";
	type: "switch";
	properties: {
		x?: string;
		y?: string;
	};
}
