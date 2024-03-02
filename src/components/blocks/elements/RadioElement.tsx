"use client";

import { useForm } from "react-hook-form";
import { RadioElementSchema } from "./RadioElement.schema";

export function RadioElement({
  name,
  text,
  value,
  required,
}: RadioElementSchema) {
  const id = `${name}-${value}`;
  const {
    register,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex flex-wrap pt-8">
      <input
        type="radio"
        id={id}
        value={value}
        className="ds-radio"
        {...register(name, {
          required: true,
          validate: (value, formValues) => !value,
        })}
      ></input>
      {errors[name] && <span role="alert">{required}</span>}
      <label htmlFor={name}>{text}</label>
    </div>
  );
}
