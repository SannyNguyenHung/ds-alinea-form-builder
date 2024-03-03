import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const stepId = request.headers.get("x-step-id");
  const flowId = request.headers.get("x-flow-id");

  console.log("Form", formData)
  console.log("stepId", stepId)
  console.log("flowId", flowId)

  return NextResponse.json({ message: "OK" });
}
