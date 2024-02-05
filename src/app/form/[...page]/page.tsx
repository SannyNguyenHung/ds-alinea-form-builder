import { getPage } from "@/cms"
import { FormPage, FormPageBlocks, FormPageSchema } from "@/components/formPage";
import { Metadata } from "next";
import { FormEvent } from "react";

// How often should the page be revalidated (in seconds) on prod?
export const revalidate = 0;

export async function generateMetadata({ params }: { params: { page: string[] | undefined } }): Promise<Metadata> {
    const { page } = await getPage(FormPageSchema, params.page ?? [])

    return {
        title: page?.title,
    }
}

export default async function Page({ params }: { params: { page: string[] | undefined } }) {
    console.log("Form", params.page);
    const { page } = (await getPage(FormPageSchema, params.page ?? []))
      
    return (
        <main>
            <FormPageBlocks page={page as FormPage}></FormPageBlocks>
        </main>
    )
}
