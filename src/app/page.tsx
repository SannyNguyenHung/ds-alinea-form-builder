import Image from 'next/image'
import {cms, Page} from '../cms'

export default async function Home() {
  const home = await cms.get(Page({slug: '/'}));

  console.log(home)

  return (
    <main className="">
      { }
    </main>
  )
}
