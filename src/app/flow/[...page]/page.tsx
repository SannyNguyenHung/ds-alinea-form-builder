import { WorkflowEditor } from "./workflow"

//import { getFlowPage } from "@/cms";

import "./flow.css";
import "sequential-workflow-designer/css/designer.css";
import "sequential-workflow-designer/css/designer-light.css";
import "sequential-workflow-designer/css/designer-dark.css";
import { getFlowPageChildren } from "@/cms";

export const revalidate = 0;

export default async function Flow({ params }: { params: { page: string[] | undefined } }) {
  const children = await getFlowPageChildren(params.page ?? []);
  
  return (
    <WorkflowEditor steps={children.map(entry => entry.page.title)} path={params.page?.join("/") ?? ""}></WorkflowEditor>
  )
}
