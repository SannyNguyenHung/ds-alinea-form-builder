import { WorkflowEditor } from "./workflow"

import "./flow.css";
import "sequential-workflow-designer/css/designer.css";
import "sequential-workflow-designer/css/designer-light.css";
import "sequential-workflow-designer/css/designer-dark.css";
import { getFlowDefinition } from "./flow";

export const revalidate = 0;

export default async function Flow({ params }: { params: { page: string[] | undefined } }) {
  const {flow, children} = await getFlowDefinition(params.page);  
  
  return (
    <WorkflowEditor flowDefinition={flow} steps={children.map(entry => entry.page.title)} path={params.page?.join("/") ?? ""}></WorkflowEditor>
  )
}
