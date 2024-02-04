import {cms} from "@/cms"
import { PageBlocks, PageSchema } from "@/components/page";
import { Metadata } from "next";

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { page: string[] | undefined } }): Promise<Metadata> {
  const pages = await cms.find(PageSchema());
  const [page] = await cms.find(PageSchema({slug: params.page ? params.page[0] : "index"}));

  return {
    title: page?.title,
  }
}

export default async function Page({ params }: { params: { page: string[] | undefined } }) {  
  console.log(params.page);
  const [page] = await cms.find(PageSchema({slug:  params.page ? params.page[0] : "index"}));

  return (
    <main>
      <PageBlocks page={page}></PageBlocks>
    </main>
  )
}
