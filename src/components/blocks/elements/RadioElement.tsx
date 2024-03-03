"use client";

import { RadioElementSchema } from "./RadioElement.schema";

export function RadioElement({
  text,
  value,
  required,
}: RadioElementSchema) {
  const id = `submit-${value}`;
  return (
    <div className="flex flex-wrap pt-8">
      <input
        type="radio"
        id={id}
        value={value}
        className="ds-radio"
        required={required}
        name="submit"
      ></input>
      <label htmlFor={id}>{text}</label>
    </div>
  );
}
