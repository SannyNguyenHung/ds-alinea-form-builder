import alinea from "alinea";
import { v4 as uuidv4 } from "uuid";
import { MapBlock, PageSchema } from "./page";
import { cms } from "@/cms";

export const FlowPageSchema = alinea.type("Flow Page", {
  title: alinea.text("Title"),
  slug: alinea.path("Slug", {
    required: true,
  }),
  [alinea.meta]: {
    contains: ["FlowPageSchema"],
    isContainer: true,
    entryUrl(entry) {
      return `/flow/${entry.parentPaths.filter(path => path !== "index").join("/")}/${entry.path}`
    }
  }
});

export type FlowPage = alinea.infer<typeof FlowPageSchema>;