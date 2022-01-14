import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import { Text } from "../styles";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";

import { useField } from "formik";
import FormHelperText from "@material-ui/core/FormHelperText";

export default function TextField1({
  icon,
  children,
  id,
  type,
  label,
  ...props
}) {
  const [field, meta] = useField({ name: id, type });
  const Label = label && (
    <Text
      className={meta.error ? "label-error" : ""}
      variant="subtitle1"
      style={{ fontWeight: 500, marginBottom: 5 }}
    >
      {label}
    </Text>
  );

  return (
    <>
      {Label}
      <FormControl variant="outlined">
        <OutlinedInput
          id={id}
          type={type || "text"}
          endAdornment={
            <InputAdornment position="end">{icon || ""}</InputAdornment>
          }
          {...props}
          {...field}
          error={meta.touched && !!meta.error}
        />
        <FormHelperText error={meta.touched && !!meta.error}>
          {meta.error}
        </FormHelperText>
      </FormControl>
    </>
  );
}
