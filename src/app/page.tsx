import Image from 'next/image'
import {cms} from '../cms'
import Page, { PageSchema } from '@/ui/page';


export default async function Home() {
  const [indexPage] = await cms.find(PageSchema({slug: '/'}));

  console.log(indexPage);

  return (
    <main className="">
      <Page page={indexPage}></Page>
    </main>
  )
}
