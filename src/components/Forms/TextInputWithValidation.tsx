import { Label, TextInput } from "flowbite-react";

type Props = {
  type: string;
  displayedLabel: string;
  nameId: string;
  placeholder?: string;
  register?: any;
  errors?: any;
  required?: boolean;
  pattern?: RegExp;
  patternInformation?: string;
};

const TextInputWithValidation = ({
  type,
  displayedLabel,
  nameId,
  placeholder,
  register,
  errors,
  pattern = /.*/,
  patternInformation,
  required = false,
}: Props) => {
  console.log(errors[nameId]);
  // const registerHook = register ? register({ nameId }) : {};
  return (
    <div>
      <div className="mb-2 block">
        <Label
          htmlFor={nameId}
          value={displayedLabel}
          color={errors[nameId] && "failure"}
        />
        {required && <span style={{ color: "red" }}> *</span>}
      </div>
      <TextInput
        {...register(nameId, { required: required, pattern: pattern })}
        id={nameId}
        type={type}
        placeholder={placeholder}
        required
        color={errors[nameId] && "failure"}
        helperText={
          <>
            {errors[nameId] && errors[nameId].type === "required" && (
              <span className="text-xs">Ce champ est obligatoire</span>
            )}
            {errors[nameId] && errors[nameId].type === "pattern" && (
              <span className="text-xs">
                Veuillez saisir un "{displayedLabel}" valide :{" "}
                {patternInformation}
              </span>
            )}{" "}
          </>
        }
      />
    </div>
  );
};

export default TextInputWithValidation;
