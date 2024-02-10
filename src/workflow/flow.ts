import { getFlowPageChildren } from "@/cms";
import { FlowDefinition, SwitchStep } from "./model";
import { existsSync, readFileSync } from "fs";
import { FormPage, getFormBranches } from "@/components/formPage";
import { v4 as uuidv4 } from "uuid";
import { BranchedStep, Step } from "sequential-workflow-designer";

export async function getFlowDefinition(page: string[] | undefined) {
	const children = await getFlowPageChildren(page ?? []);
	const flowPath = page?.join("/") ?? "";
	const flowConfiguration = `${process.env.PWD}/src/content/pages/${flowPath}/flow.config`;
	let flow = {} as FlowDefinition;
  
	if (existsSync(flowConfiguration)) {
	  flow = (JSON.parse(readFileSync(`${process.env.PWD}/src/content/pages/${flowPath}/flow.config`, "utf8")).value) as FlowDefinition;
	}
	return { flow, children };
}

export async function getWorkflowBranches(page: FormPage) : Promise<Step | BranchedStep> {
		const branches = await getFormBranches(page);

		if(Object.entries(branches).length === 0) {
			return {
				id: uuidv4(),
				componentType: "task",
				type: "task",
				name: page.title,
				properties: {}
			}
		}

		return {
		  id: uuidv4(),
		  componentType: "switch",
		  type: "parallel",
		  name: page.title,
		  properties: {},
		  branches: await getFormBranches(page)
		}
};
