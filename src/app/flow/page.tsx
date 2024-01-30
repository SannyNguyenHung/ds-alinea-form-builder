import {cms} from "@/cms"
import Page, { PageSchema } from "@/components/page";
import { Workflow } from "./workflow";

import "./flow.css";
import "sequential-workflow-designer/css/designer.css";
import "sequential-workflow-designer/css/designer-light.css";
import "sequential-workflow-designer/css/designer-dark.css";

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export default async function Home({ params }: { params: { page: string } }) {
  const [page] = await cms.find(PageSchema({slug: params.page ?? "/"}));
  // I would like to use the page tree from alinea to find the parent page (could be also useful for breadcrumbs etc), 
  // for now using the slug "/" instead of parent
  const [indexPage] = await cms.find(PageSchema({slug: "/"}));
  
  return (
    <main className="">
      <Workflow></Workflow>
    </main>
  )
}
