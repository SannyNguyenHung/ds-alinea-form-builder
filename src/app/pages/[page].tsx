import {cms} from '@/cms'
import Page, { PageSchema } from '@/components/page';
import { useRouter } from 'next/router'

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export default async function Home() {
  const router = useRouter()
  let page = Array.isArray(router.query.page) ? router.query.page[0] : router.query.page;

  const [indexPage] = await cms.find(PageSchema({slug: page ?? '/'}));

  return (
    <main className="">
      <Page page={indexPage}></Page>
    </main>
  )
}
