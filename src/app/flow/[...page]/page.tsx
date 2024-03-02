import { WorkflowEditor } from "@/workflow/editor/workflow";
import { getFlowDefinition, getWorkflowBranches } from "@/workflow/editor/flow";

export const revalidate = 0;

export default async function Flow({
  params,
}: {
  params: { page: string[] | undefined };
}) {
  const flowId = params.page?.filter((page) => page !== "index");
  const { flow, children } = await getFlowDefinition(flowId);

  const stepDefinitions = [];

  for (const entry of children) {
    stepDefinitions.push(await getWorkflowBranches(entry.page));
  }

  return (
    <WorkflowEditor
      flowDefinition={flow}
      steps={stepDefinitions}
      path={flowId?.join("/") ?? ""}
    ></WorkflowEditor>
  );
}
