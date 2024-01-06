import Image from 'next/image'
import {cms, Page} from '../cms'

export default async function Home() {
  const home = await cms.get(Page({path: 'landingpage'}));

  console.log(home)

  return (
    <main className="">
      { home.content.map((block, i) => 
        <div key={i}></div>
      )}
    </main>
  )
}
