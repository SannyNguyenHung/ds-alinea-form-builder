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
    const response = await fetch("/api/form", {
      method: "POST",
      body: formData,
      redirect: "follow"
    }).then((response) => {
      if (response.redirected) {
        //router.push(response.url)
      }
    });
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
        <input type="hidden" name="step-id" value={meta?.slug} />
        <input type="hidden" name="flow-id" value={meta?.flowId} />
      </form>
    </Block>
  );
}
