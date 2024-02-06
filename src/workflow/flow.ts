import { getFlowPageChildren } from "@/cms";
import { FlowDefinition } from "./model";
import { existsSync, readFileSync } from "fs";


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