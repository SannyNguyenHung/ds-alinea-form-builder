import alinea from "alinea";
import { GoWorkflow } from "react-icons/go";

export const FlowPageSchema = alinea.type("🛠️ Flow Page", {
  title: alinea.text("Title"),
  slug: alinea.path("Slug", {
    required: true,
  }),
  [alinea.meta]: {
    contains: ["FormPageSchema", "FlowPageSchema"],
    isContainer: true,
    entryUrl(entry) {
      return `/flow/${entry.parentPaths.join("/")}/${entry.path}`
    },
    icon: GoWorkflow
  }
});

export type FlowPage = alinea.infer<typeof FlowPageSchema>;