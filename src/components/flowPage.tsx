import { Config, Field, Infer } from "alinea";
import { GoWorkflow } from "react-icons/go";

export const FlowPageSchema = Config.type("🛠️ Flow Page", {
  contains: ["FormPageSchema", "FlowPageSchema"],
  isContainer: true,
  entryUrl(entry) {
    return `/flow/${entry.parentPaths.join("/")}/${entry.path}`;
  },
  icon: GoWorkflow,
  fields: {
    title: Field.text("Title"),
    slug: Field.path("Slug", {
      required: true,
    }),
  },
});

export type FlowPage = Infer<typeof FlowPageSchema>;
