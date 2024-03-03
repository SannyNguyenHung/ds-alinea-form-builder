import { Banner } from "./blocks/banner";
import { CallToAction } from "./blocks/callToAction";
import { Content } from "./blocks/content";
import { Footer } from "./blocks/footer";
import { Header } from "./blocks/header";
import { Hero } from "./blocks/hero";
import { LogoBanner } from "./blocks/logoBanner";
import { PageHeader } from "./blocks/pageHeader";
import { Input } from "./blocks/inputBlock";
import { Meta } from "./meta";
import { FormHeader } from "./blocks/formHeader";
import { YesNoSubmit } from "./blocks/yesNoSubmit";


// Refactor this to use a map
export function MapBlock({ block, meta }: { block: any; meta: Meta }) {
  switch (block._type) {
    case "Banner":
      return <Banner block={block} meta={meta} />;
    case "Text":
      return <Content block={block} meta={meta} />;
    case "Header":
      return <Header block={block} meta={meta} />;
    case "Hero":
      return <Hero block={block} meta={meta} />;
    case "LogoBanner":
      return <LogoBanner block={block} meta={meta} />;
    case "CallToAction":
      return <CallToAction block={block} meta={meta} />;
    case "Footer":
      return <Footer block={block} meta={meta} />;
    case "PageHeader":
      return <PageHeader block={block} meta={meta} />;
    case "FormHeader":
      return <FormHeader block={block} meta={meta} />;
    case "Input":
      return <Input block={block} meta={meta} />;
    case "YesNoSubmit":
      return <YesNoSubmit block={block} meta={meta} />;
  }

  return <>Error: Block not found</>;
}
