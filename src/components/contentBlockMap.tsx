import { Banner } from "./blocks/banner"
import { CallToAction } from "./blocks/callToAction"
import { Content } from "./blocks/content"
import { Footer } from "./blocks/footer"
import { Header } from "./blocks/header"
import { Hero } from "./blocks/hero"
import { LogoBanner } from "./blocks/logoBanner"
import { PageHeader } from "./blocks/pageHeader"
import { Input } from "./blocks/input"

// Refactor this to use a map
export function MapBlock({block} : {block: any}) {
    switch (block.type) {
        case "Banner":
            return <Banner block={block} />
        case "Text":
            return <Content block={block} />
        case "Header":
            return <Header block={block} />
        case "Hero":
            return <Hero block={block} />
        case "LogoBanner":
            return <LogoBanner block={block} />
        case "CallToAction":
            return <CallToAction block={block} />
        case "Footer":
            return <Footer block={block} />
        case "PageHeader":
            return <PageHeader block={block} />
        case "Input":
            return <Input block={block} />
    }
    return <>Error: Block not found</>
}