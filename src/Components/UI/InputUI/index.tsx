import { TextField, FormControl } from "@mui/material";

type Props = {
  label: string;
  value: string;
  onChange: (value: unknown) => void;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  placeholder?: string;
};

export const InputUI = ({
  label,
  value,
  onChange,
  required,
  helperText,
  error,
  fullWidth,
  placeholder,
}: Props) => {
  return (
    <FormControl
      sx={{ display: "inline-flex", flexDirection: "column" }}
      fullWidth={!!fullWidth}
    >
      <TextField
        error={!!error}
        value={value}
        onChange={onChange}
        required={required}
        id="outlined-basic"
        helperText={helperText}
        placeholder={placeholder}
        label={label}
        variant="outlined"
      />
    </FormControl>
  );
};
