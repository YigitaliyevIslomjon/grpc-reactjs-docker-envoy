import {
  Button,
  CircularProgress,
  Grid,
  Stack,
  TextField,
} from "@mui/material";

import { Controller } from "react-hook-form";

import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { MobileDatePicker } from "@mui/x-date-pickers";
import { useCustomerForm } from "../Hooks";
import { InputUI } from "Components/UI/InputUI";
import { APP } from "Constants/App";
import { SelectUI } from "Components/UI/SelectUI";
import { GenderOptions } from "Constants/Data";

export const CustomerForm = () => {
  const { onSubmit, form, isLoading } = useCustomerForm();
  const { control, handleSubmit } = form;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={4}>
        <Grid item xs={4}>
          <Controller
            name="firstName"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <InputUI
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label={APP.FIRST_NAME}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="username"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <InputUI
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label={APP.USERNAME}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="lastName"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <InputUI
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label={APP.LASTNAME}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="birthdate"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <LocalizationProvider vider dateAdapter={AdapterMoment}>
                  <MobileDatePicker
                    label="Date mobile"
                    inputFormat="MM/DD/YYYY"
                    value={value}
                    onChange={onChange}
                    renderInput={(params) => (
                      <TextField fullWidth {...params} />
                    )}
                  />
                </LocalizationProvider>
              );
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="phoneNumber"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <InputUI
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label={APP.PHONENUMBER}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="address"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <InputUI
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label={APP.ADDRESS}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="gender"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <SelectUI
                  selectOptions={GenderOptions}
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label={APP.GENDER}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <Controller
            name="imageUrl"
            control={control}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              return (
                <InputUI
                  fullWidth
                  value={value}
                  onChange={onChange}
                  label={APP.IMAGEURL}
                  error={!!error?.message}
                  helperText={error?.message}
                />
              );
            }}
          />
        </Grid>
        <Grid item xs={6} marginTop={1}>
          <Stack direction="row" spacing={2}>
            <Button
              size="large"
              type="submit"
              startIcon={
                isLoading && <CircularProgress size={20} color="inherit" />
              }
              disabled={isLoading}
              variant="contained"
            >
              {APP.SAVE}
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </form>
  );
};
