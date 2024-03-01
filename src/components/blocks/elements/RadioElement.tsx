import { Config, Field, Infer } from "alinea";
import { useForm } from 'react-hook-form';

export const RadioElementSchema = Config.type("🔘 Radio", { fields: {
    name: Field.text("Name"),
    text: Field.text("Text"),
    value: Field.text("Value"),
    required: Field.text("Required Text", { initialValue: "Fehler: Bitte treffen Sie eine Auswahl."})
}});

export type RadioElementSchema = Infer<typeof RadioElementSchema>;
  
export function RadioElement({name, text, value, required} : RadioElementSchema) {
    const id = `${name}-${value}`;
    const {
        register,
        formState: { errors },
      } = useForm();

    
    
    return (
        <div className="flex flex-wrap pt-8">
            <input type="radio" id={id} value={value} className="ds-radio"
            {...register(name, { required: true, validate: (value, formValues) => !value})}></input>
            {errors[name] && <span role="alert">{required}</span>}
            <label htmlFor={name}>{text}</label>
        </div>
    )
}