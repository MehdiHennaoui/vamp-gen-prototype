import React from "react";
import TextField from "@material-ui/core/TextField";
import { useFormContext } from "react-hook-form";
import IconExplanation from "./IconExplanation";
import ExplanationText from "./ExplanationText";

export const FieldDescription = ({ label, require, name }) => {
  const { errors, register, getValues } = useFormContext();
  const error = errors[name] || null;
  const value = getValues[name];
  const type = name === "age" ? "number" : "text";
  console.log(name, errors);
  return (
    <div>
      <TextField
        name={name}
        inputRef={register}
        required={require}
        label={label}
        variant="outlined"
        type={type}
        InputProps={{
          endAdornment: <IconExplanation name={name} />
        }}
        error={!!error}
        helperText={error}
      />
      <ExplanationText name={name} />
    </div>
  );
};

export default FieldDescription;
