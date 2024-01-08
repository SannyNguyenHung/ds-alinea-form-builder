import Image from 'next/image'
import {cms} from '@/cms'
import Page, { PageSchema } from '@/components/page';

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export default async function Home() {
  const [indexPage] = await cms.find(PageSchema());

  console.log(indexPage);

  return (
    <main className="">
      <Page page={indexPage}></Page>
    </main>
  )
}
