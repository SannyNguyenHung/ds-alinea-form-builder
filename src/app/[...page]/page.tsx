import { cms, getPage } from "@/cms";
import { Meta } from "@/components/meta";
import { Page, PageBlocks, PageSchema } from "@/components/page";
import { Query } from "alinea";
import { Metadata } from "next";

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: { page: string[] | undefined };
}): Promise<Metadata> {
  const [page] = await cms.find(
    Query(PageSchema).where({ slug: params.page ? params.page[0] : "index" }),
  );

  return {
    title: page?.title,
  };
}

export default async function Page({
  params,
}: {
  params: { page: string[] | undefined };
}) {
  const [page] = await cms.find(
    Query(PageSchema).where({ slug: params.page ? params.page[0] : "index" }),
  );
  const parent = (await getPage(PageSchema, ["index"])).page as Page;
  const meta: Meta = {
    slug: page.slug,
    type: "Page",
  };

  return (
    <main>
      <PageBlocks page={page} parent={parent} meta={meta}></PageBlocks>
    </main>
  );
}
