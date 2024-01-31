import {cms} from "@/cms"
//import { Blocks, PageSchema } from "@/components/page";
import { Metadata } from "next";

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { page: string } }): Promise<Metadata> {
  // const [indexPage] = await cms.find(PageSchema({slug: params.page ?? "/"}));

  return {
    title: "Form Page" // indexPage.title,
  }
}

export default async function FormPage({ params }: { params: { page: string } }) {  
  //const [page] = await cms.find(PageSchema({slug: params.page ?? "/"}));

  return (
    <main>
      Form Input
      {/**<Blocks page={page}></Blocks>**/}
    </main>
  )
}
