import { WorkflowEditor } from "@/workflow/editor/workflow";
import { getFlowConfiguration } from "@/workflow/engine/flow";
import { getWorkflowBranches } from "@/workflow/editor/flow";

export const revalidate = 0;

export default async function Flow({
  params,
}: {
  params: { page: string[] | undefined };
}) {
  const flowId = params.page?.filter((page) => page !== "index");
  console.log("Page", params)
  console.log("Flow", flowId)
  const { flow, children } = await getFlowConfiguration(flowId);

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
