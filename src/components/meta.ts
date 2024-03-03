
export type Meta = {
    type: "Page" | "FlowPage" | "FormPage";
    slug: string;
    index?: string;
    context?: any;
    flowId?: string;
  };