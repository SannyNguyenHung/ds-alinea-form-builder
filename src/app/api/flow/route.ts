import { writeFileSync, readFileSync, existsSync } from "fs";
import { NextRequest, NextResponse } from "next/server";
import { notFound } from "next/navigation"

export async function GET(request: NextRequest) {
  const flowPath = request.nextUrl.searchParams.get("path");

  const flowConfiguration = `${process.env.PWD}/src/content/flow/${flowPath}/flow.config`;

  if(existsSync(flowConfiguration)) {
    const flow = readFileSync(`${process.env.PWD}/src/content/flow/${flowPath}/flow.config`, "utf8");

    return NextResponse.json(JSON.parse(flow));
  }
    
  return notFound();
}

export async function POST(request: NextRequest) {
  const { method } = request;

  console.log(request);

  const json: {
    path: string;
    definition: any; // WrappedDefinition<{properties: {alfa: string;};sequence: TaskStep[];}>
  } = await request.json();

  writeFileSync(`${process.env.PWD}/src/content/flow/${json.path}/flow.config`, JSON.stringify(json.definition, null, "\t"));


  return NextResponse.json({ message: "OK" });
}