import alinea from "alinea"
import { BasicBlock, Block } from "./block";
import { BlockBackgroundColors } from "./elements/colors";
import { Meta } from "../contentBlockMap";

export const PageHeaderBlock = alinea.type("🏁 Page Header", {
  ...BasicBlock,
  title: alinea.text("Title"),
  background: alinea.select("Background", BlockBackgroundColors),
});

export type PageHeaderBlock = alinea.infer<typeof PageHeaderBlock>;

export function PageHeader({ block, meta }: { block: PageHeaderBlock, meta: Meta }) {
  const background = (block.background ?? "bg-blue-100") + (block.background === "bg-blue-800" ? " text-white" : "");
  return (
    <Block
      blockClassName={background + " !pt-0 !pb-0"}
      itemsClassName=""
      meta={meta}
      block={block}>
      <nav className="py-8 px-16 bg-blue-100 flex flex-wrap items-center text-base">
        <a href="/" aria-label="Startseite" className="focus:outline ds-link-01-bold">
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24" data-testid="HomeOutlinedIcon" role="graphics-symbol img" focusable="false" aria-hidden="true" className="!h-[1.6rem] !w-[1.6rem]">
            <path d="M0 0h24v24H0V0z" fill="none"></path>
            <path d="M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z"></path>
          </svg>
        </a>
        <div>
          <span className="mx-8">/</span>
          <span>{block.title}</span>
        </div>
      </nav>
      <div className="container !pt-32 !pb-40 ds-stack-8">
        <h1 className="ds-heading-01-reg">{block.title}</h1>
      </div>
    </Block>
  )
}