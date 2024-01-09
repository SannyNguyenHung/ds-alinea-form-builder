import type { Metadata, ResolvingMetadata } from 'next'
import './globals.css'
import { cms } from '@/cms'
import Head from 'next/head'
import { PageSchema } from '@/components/page';

export async function generateMetadata({ params }: { params: { page: string } },  parent: ResolvingMetadata): Promise<Metadata> {
  const [indexPage] = await cms.find(PageSchema({slug: params.page ?? '/'}));

  return {
    title: indexPage.title,
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <body>{children}</body>
      <cms.previews />
    </>
  )
}
