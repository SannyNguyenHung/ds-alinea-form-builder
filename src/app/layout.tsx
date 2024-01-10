import type { Metadata, ResolvingMetadata } from 'next'
import './globals.css'
import { cms } from '@/cms'
import { PageSchema } from '@/components/page';

export async function generateMetadata({ params }: { params: { page: string } }): Promise<Metadata> {
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
    <html>
      <body>{children}</body>
      <cms.previews />
    </html>
  )
}
