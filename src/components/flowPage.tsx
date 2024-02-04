import alinea from "alinea";

export const FlowPageSchema = alinea.type("Flow Page", {
  title: alinea.text("Title"),
  slug: alinea.path("Slug", {
    required: true,
  }),
  [alinea.meta]: {
    contains: ["FormPageSchema", "FlowPageSchema"],
    isContainer: true,
    entryUrl(entry) {
      return `/flow/${entry.parentPaths.join("/")}/${entry.path}`
    }
  }
});

export type FlowPage = alinea.infer<typeof FlowPageSchema>;