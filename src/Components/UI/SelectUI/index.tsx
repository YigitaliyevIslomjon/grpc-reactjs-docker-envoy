import {
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import { SelelctOptions } from "Types";

type Props = {
  label: string;
  value: string | number;
  onChange: (value: unknown) => void;
  required?: boolean;
  helperText?: string;
  error?: boolean;
  fullWidth?: boolean;
  selectOptions: SelelctOptions[];
};

export const SelectUI = ({
  label,
  value,
  onChange,
  required,
  helperText,
  error,
  fullWidth,
  selectOptions,
}: Props) => {
  return (
    <FormControl
      sx={{ display: "inline-flex", flexDirection: "column" }}
      fullWidth={!!fullWidth}
      error={!!error}
    >
      <InputLabel id="demo-simple-select-error-label">{label}</InputLabel>
      <Select
        labelId="demo-simple-select-error-label"
        id="demo-simple-select-error"
        value={value}
        label={label}
        onChange={onChange}
      >
        {selectOptions.map(({ value, title }) => (
          <MenuItem key={value} value={value}>
            {title}
          </MenuItem>
        ))}
      </Select>
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
};
