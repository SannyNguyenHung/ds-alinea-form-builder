import { FormPage, getFormBranches } from "@/components/formPage";
import { v4 as uuidv4 } from "uuid";
import { BranchedStep, Step } from "sequential-workflow-designer";

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
      properties: {
        slug: page.slug,
      },
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
        console.log("Branch", branch);
        return { [branch?.text ?? "key"]: [] };
      }),
    ),
  };
}
