import { getFlowPageChildren } from "@/cms";
import { FlowDefinition } from "../engine/model";
import { existsSync, readFileSync, mkdirSync } from "fs";

export async function getFlowConfiguration(page: string[] | undefined) {
    if (page === undefined) {
      return { flow: { properties: {}, sequence: [] }, children: [] };
    }
  
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
      mkdirSync(flowFolder, { recursive: true });
    }
    return { flow, children };
  }
  