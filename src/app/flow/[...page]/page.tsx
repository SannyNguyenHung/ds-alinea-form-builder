import { Workflow } from "./workflow";

import "./flow.css";
import "sequential-workflow-designer/css/designer.css";
import "sequential-workflow-designer/css/designer-light.css";
import "sequential-workflow-designer/css/designer-dark.css";

export const revalidate = 0;

export default async function Flow({ params }: { params: { page: string } }) {
  
  return (
    <main className="">
      <Workflow></Workflow>
    </main>
  )
}
