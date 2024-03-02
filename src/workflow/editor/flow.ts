import { getFlowPageChildren } from "@/cms";
import { FlowDefinition } from "../engine/model";
import { existsSync, readFileSync, mkdirSync } from "fs";
import { FormPage, getFormBranches } from "@/components/formPage";
import { v4 as uuidv4 } from "uuid";
import { BranchedStep, Step } from "sequential-workflow-designer";

export async function getFlowDefinition(page: string[] | undefined) {
  const children = await getFlowPageChildren(page ?? []);
  const flowPath = page?.join("/") ?? "";
  const flowFolder = `${process.env.PWD}/src/content/flow/${flowPath}`;
  const flowConfiguration = `${flowFolder}/flow.config`;

  let flow = {} as FlowDefinition;

  if (existsSync(flowFolder)) {
    if (existsSync(flowConfiguration)) {
      flow = JSON.parse(readFileSync(`${flowFolder}/flow.config`, "utf8"))
        .value as FlowDefinition;
    } else {
      flow = {
        properties: {},
        sequence: [],
      };
    }
  } else {
    mkdirSync(flowFolder);
  }
  return { flow, children };
}

export async function getWorkflowBranches(
  page: FormPage,
): Promise<Step | BranchedStep> {
  const branches = await getFormBranches(page);

  if (branches.length === 0) {
    return {
      id: uuidv4(),
      componentType: "task",
      type: "task",
      name: page.title,
      properties: {},
    };
  }

  return {
    id: uuidv4(),
    componentType: "switch",
    type: "parallel",
    name: page.title,
    properties: {
      slug: page.slug,
      branches: branches,
    },
    branches: Object.assign(
      {},
      ...branches.map((branch) => {
        return { [branch?.text ?? "key"]: [] };
      }),
    ),
  };
}
