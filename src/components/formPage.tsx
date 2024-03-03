import { Config, Field, Infer } from "alinea";
import { ContentBlock } from "./blocks/content";
import { CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";
import { BannerBlock } from "./blocks/banner";
import { FormHeaderBlock } from "./blocks/formHeader";
import { AiOutlineForm } from "react-icons/ai";
import { Page } from "./page";
import { MapBlock } from "./contentBlockMap";
import { InputBlock } from "./blocks/input";
import { Meta } from "./meta";
import { YesNoSubmitBlock } from "./blocks/yesNoSubmit";

export const FormPageSchema = Config.type("📝 Form Page", {
  fields: {
    title: Field.text("Title"),
    slug: Field.path("Slug", { required: true }),
    blocks: Field.list("Blocks", {
      schema: Config.schema({
        types: {
          Banner: BannerBlock,
          FormHeader: FormHeaderBlock,
          Text: ContentBlock,
          CallToAction: CallToActionBlock,
          Input: InputBlock,
          YesNoSubmit: YesNoSubmitBlock,
        },
      }),
    }),
  },
  isContainer: true,
  contains: ["FormPageSchema", "FlowPageSchema", "PageSchema"],
  entryUrl(entry) {
    return `/form/${entry.parentPaths.join("/")}/${entry.path}`;
  },
  icon: AiOutlineForm,
});

export type FormPage = Infer<typeof FormPageSchema>;

export async function FormPageBlocks({
  page,
  parent,
  meta,
}: {
  page: FormPage;
  parent: Page;
  meta: Meta;
}) {
  return (
    <div className="!pt-0 !pb-0">
      {parent?.header?.map((block) => (
        <MapBlock key={uuidv4()} block={block} meta={meta} />
      ))}
      <div className="min-h-screen bg-blue-100">
        {page?.blocks?.map((block) => (
          <MapBlock key={uuidv4()} block={block} meta={meta} />
        ))}
      </div>
      {parent?.footer?.map((block) => (
        <MapBlock key={uuidv4()} block={block} meta={meta} />
      ))}
    </div>
  );
}

const ExportTypes = ["Input"];
const ExportElementsTypes = ["Radio"];

export async function getFormBranches(page: FormPage) {
  //const branches: Record<string, []> = {};

  const inputBranches = page.blocks
  .filter((block) => ExportTypes.includes(block._type))
  .flatMap((block) => {
    const inputBlock = block as InputBlock;
    console.log("Content", inputBlock?.content);

    return inputBlock?.content
      ?.filter((block) => ExportElementsTypes.includes(block._type))
      .map((element) => {
        return {
          name: ("name" in element ? element.name : "") as string | undefined,
          text: ("text" in element ? element.text : "") as string | undefined,
        };
      });
  });

  page.blocks.filter((block) => block._type === "YesNoSubmit").forEach((block) => {
    inputBranches.push({name: "Yes",text: ("yesLabel" in block ? block.yesLabel : "") as string | undefined});
    inputBranches.push({name: "No", text: ("noLabel" in block ? block.noLabel : "") as string | undefined});
  });
  

  return inputBranches;
}
