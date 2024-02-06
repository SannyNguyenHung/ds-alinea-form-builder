import { WorkflowEditor } from "@/workflow/workflow"
import { getFlowDefinition } from "../../../workflow/flow";

export const revalidate = 0;

export default async function Flow({ params }: { params: { page: string[] | undefined } }) {
  const {flow, children} = await getFlowDefinition(params.page);  
  
  return (
    <WorkflowEditor flowDefinition={flow} steps={children.map(entry => entry.page.title)} path={params.page?.join("/") ?? ""}></WorkflowEditor>
  )
}
