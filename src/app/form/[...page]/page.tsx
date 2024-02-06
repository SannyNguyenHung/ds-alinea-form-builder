import { getPage } from "@/cms"
import { FormPage, FormPageBlocks, FormPageSchema } from "@/components/formPage";
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

    return (
        <main>
            <FormPageBlocks page={page}></FormPageBlocks>
        </main>
    )
}
