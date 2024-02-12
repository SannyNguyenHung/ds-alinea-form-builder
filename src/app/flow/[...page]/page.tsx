import { WorkflowEditor } from "@/workflow/editor/workflow"
import { getFlowDefinition, getWorkflowBranches } from "@/workflow/editor/flow";

export const revalidate = 0;

export default async function Flow({ params }: { params: { page: string[] | undefined } }) {
  const {flow, children} = await getFlowDefinition(params.page);

  const stepDefinitions = []
  
  for (const entry of children) {
    stepDefinitions.push(await getWorkflowBranches(entry.page));
  }

  console.log(stepDefinitions);
  return (
    <WorkflowEditor flowDefinition={flow} steps={stepDefinitions} path={params.page?.join("/") ?? ""}></WorkflowEditor>
  )
}
