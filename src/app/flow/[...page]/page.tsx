import { WorkflowEditor } from "@/workflow/editor/workflow";
import { getFlowDefinition, getWorkflowBranches } from "@/workflow/editor/flow";

export const revalidate = 0;

export default async function Flow({
  params,
}: {
  params: { page: string[] | undefined };
}) {
  console.log("Page", params.page)
  const flowId = params.page?.filter((page) => page !== "index");
  console.log("Flow", flowId)
  const { flow, children } = await getFlowDefinition(flowId);

  const stepDefinitions = [];

  for (const entry of children) {
    stepDefinitions.push(await getWorkflowBranches(entry.page));
  }

  const conditions = ["hasValidSomething"]

  return (
    <WorkflowEditor
      flowDefinition={flow}
      conditions={conditions}
      steps={stepDefinitions}
      path={flowId?.join("/") ?? ""}
    ></WorkflowEditor>
  );
}
