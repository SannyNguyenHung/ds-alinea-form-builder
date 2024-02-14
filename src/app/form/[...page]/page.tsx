import { getPage } from "@/cms"
import { Meta } from "@/components/contentBlockMap";
import { FormPage, FormPageBlocks, FormPageSchema } from "@/components/formPage";
import { Page, PageSchema } from "@/components/page";
import { Metadata } from "next";

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { page: string[] | undefined } }): Promise<Metadata> {
    const title = (await getPage(FormPageSchema, params.page ?? []))?.page?.title ?? ""

    return {
        title,
    }
}

export default async function Page({ params }: { params: { page: string[] | undefined } }) {
    console.log("Form", params.page);
    const page = (await getPage(FormPageSchema, params.page ?? []))?.page as FormPage
    const parent = (await getPage(PageSchema, ["index"])).page as Page;
    const meta: Meta = {
        slug: page?.slug,
        type: "FormPage",
    }

    return (
        <main>
            <FormPageBlocks page={page} parent={parent} meta={meta}></FormPageBlocks>
        </main>
    )
}
