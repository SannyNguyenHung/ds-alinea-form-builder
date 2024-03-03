"use client";

import { FormEvent } from "react";
import { Block } from "./block";
import {
  RichTextContent,
  RichTextBoxExtension,
} from "./elements/richTextContent";
import { InputBlock } from "./input";
import { Meta } from "../meta";

export function Input({ block, meta }: { block: InputBlock; meta: Meta }) {
  async function sendFormData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set("x-step-id", meta?.slug);
    requestHeaders.set("x-flow-id", meta?.flowId ?? "");

    const response = await fetch("/api/form", {
      method: "POST",
      headers: requestHeaders,
      body: formData,
    });

    console.log(response);
  }

  return (
    <Block
      block={block}
      meta={meta}
      blockClassName="!pt-0 !pb-0"
      itemsClassName="ds-stack-8 container !pt-0 !pb-0"
    >
      <form onSubmit={sendFormData}>
        <RichTextContent
          content={block.content}
          blocks={RichTextBoxExtension}
        />
      </form>
    </Block>
  );
}
