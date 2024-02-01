import {cms, getFlowPage} from "@/cms"
import { FlowPageSchema, FlowPageBlocks } from "@/components/flowPage";
//import { Blocks, PageSchema } from "@/components/page";
import { Metadata } from "next";

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { page: string[] | undefined } }): Promise<Metadata> {
  const [page] = await cms.find(FlowPageSchema({slug: params.page ? params.page[0] : "index"}));

  return {
    title: page?.title,
  }
}

export default async function FlowPage({ params }: { params: { page: string[] | undefined } }) {  
  const [page] = await getFlowPage(params.page ?? []);

  return (
    <main>
      <FlowPageBlocks page={page}></FlowPageBlocks>
    </main>
  )
}
