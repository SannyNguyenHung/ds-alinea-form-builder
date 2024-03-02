import { Config, Field, Infer } from "alinea";
import { ContentBlock } from "./blocks/content";
import { HeaderBlock } from "./blocks/header";
import { HeroBlock } from "./blocks/hero";
import { LogoBannerBlock } from "./blocks/logoBanner";
import { CallToActionBlock } from "./blocks/callToAction";
import { v4 as uuidv4 } from "uuid";
import { BannerBlock } from "./blocks/banner";
import { FooterBlock } from "./blocks/footer";
import { PageHeaderBlock } from "./blocks/pageHeader";
import { RiPagesLine } from "react-icons/ri";
import { MapBlock, Meta } from "./contentBlockMap";

export const PageSchema = Config.type("📃 Page", {
  contains: ["PageSchema", "FlowPageSchema", "FormPageSchema"],
  isContainer: true,
  icon: RiPagesLine,
  fields: {
    title: Field.text("Title"),
    slug: Field.path("Slug", {
      required: true,
    }),
    blocks: Field.list("Blocks", {
      schema: Config.schema({
        types: {
          Banner: BannerBlock,
          PageHeader: PageHeaderBlock,
          Text: ContentBlock,
          Hero: HeroBlock,
          LogoBanner: LogoBannerBlock,
          CallToAction: CallToActionBlock,
        },
      }),
    }),
    header: Field.list("Header (parent)", {
      schema: Config.schema({
        types: {
          Banner: BannerBlock,
          Text: ContentBlock,
          Header: HeaderBlock,
        },
      }),
    }),
    footer: Field.list("Footer (parent)", {
      schema: Config.schema({
        types: {
          Banner: BannerBlock,
          Text: ContentBlock,
          Footer: FooterBlock,
        },
      }),
    }),
  },
});

export type Page = Infer<typeof PageSchema>;

export async function PageBlocks({
  page,
  parent,
  meta,
}: {
  page: Page;
  parent: Page;
  meta: Meta;
}) {
  const header = page?.header.length > 0 ? page?.header : parent?.header;
  const footer = page?.footer.length > 0 ? page?.footer : parent?.footer;

  return (
    <div className="">
      {header?.map((block) => (
        <MapBlock key={uuidv4()} block={block} meta={meta} />
      ))}
      {page?.blocks?.map((block) => (
        <MapBlock key={uuidv4()} block={block} meta={meta} />
      ))}
      {footer?.map((block) => (
        <MapBlock key={uuidv4()} block={block} meta={meta} />
      ))}
    </div>
  );
}
