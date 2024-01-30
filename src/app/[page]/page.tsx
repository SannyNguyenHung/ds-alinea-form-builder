import {cms} from "@/cms"
import { Blocks, PageSchema } from "@/components/page";

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export default async function Home({ params }: { params: { page: string } }) {  
  const [page] = await cms.find(PageSchema({slug: params.page ?? "/"}));

  return (
    <main>
      <Blocks page={page}></Blocks>
    </main>
  )
}
