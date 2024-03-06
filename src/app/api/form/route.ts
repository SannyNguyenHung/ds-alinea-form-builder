import { NextRequest, NextResponse } from "next/server";
import { redirect } from 'next/navigation'
import { getFlowConfiguration } from "@/workflow/engine/flow";

import { BranchedStep, DefinitionWalker } from 'sequential-workflow-model';

const walker = new DefinitionWalker();

type Session = {
  slug: string;
  flowId: string;
  data?: any;
};

let session: Session[] = [];

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const stepId = formData.get("step-id")?.toString();
  const flowId = formData.get("flow-id")?.toString();

  const flowConfiguration = await getFlowConfiguration(flowId?.split('/'));
  const step = flowConfiguration.flow.sequence.filter((step) => step.properties.slug === stepId);

  if (!flowId || !stepId) {
    throw new Error("FlowId and StepId are required");
  }

  console.log();

  console.log(stepId);
  console.log("flowConfiguration", flowConfiguration)
  console.log("FormData", formData);

  const sessionIndex = session.findIndex(sessionItem => sessionItem.slug === stepId && sessionItem.flowId === flowId);

  if (sessionIndex === -1) {
    session.push({
      slug: stepId,
      flowId,
      data: formData
    });
  } else {
    session[sessionIndex].data = formData;
  }

  let nextStep = "";
  console.log("Session", session);
  console.log("StepId", stepId);
  console.log("Test", flowConfiguration.flow.sequence.filter((step) => step.properties.slug === stepId));
  

  // walker.forEach(flowConfiguration.flow, (step) => {
  //   const formData = session.find(sessionItem => sessionItem.slug === step.properties.slug && sessionItem.flowId === flowId)?.data;
  //   //walker.getParents()
  //   //const parent = 
  //   if (!formData) {
  //     nextStep = (step.properties["slug"] as string) ?? "";
  //     return true;
  //   }

  //   if (step.type === "parallel") {
  //     console.log("Submit", formData.get("submit"))
  //     const branchStep = step as BranchedStep;

  //     const searchForBranch = (branchStep.properties["branches"] as { name: string, text: string }[]).find((branch) => {
  //       return formData.get("submit") === branch.name;
  //     });

  //     const validBranch = branchStep.branches[searchForBranch?.text ?? ""];

  //     if (validBranch) {
  //       console.log("Parallel - true")
  //       nextStep = (step.properties["slug"] as string) ?? "";
  //       return true;
  //     }
  //     console.log("Parallel - false")

  //   }

  //   console.log("Flow - False", step.type)
  //   return false;
  // });

  // console.log("flowId", flowId);
  // console.log("NextStep", "form/" + flowId + "/" + nextStep)

  return redirect("/form/" + flowId + "/" + nextStep);
}
