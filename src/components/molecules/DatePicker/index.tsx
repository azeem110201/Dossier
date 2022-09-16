/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import Calendar from "@mui/icons-material/CalendarTodayOutlined";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { Grid, styled } from "@mui/material";

interface DatePickerProps {
  label: string;
  id?: string;
  date: Date;
  setChanged?: (item: any) => void;
  checkAll?: () => void;
}

const Container = styled(Grid)({
  width: "18.875rem",
  height: "2.5rem",
  borderRadius: "10px",
});

const TextFieldContainer = styled(TextField)({
  "& .css-33lfn3-MuiInputBase-input-MuiOutlinedInput-input": {
    font: "revert",
  },
});

const ResponsiveDatePickers = (props: DatePickerProps) => {
  const [value, setValue] = React.useState<Date>();

  const handleChange = (newValue: Date | null) => {
    if (newValue) {
      const dateValue =
        newValue.getMonth() + 1 < 9
          ? "0" + newValue.getMonth()
          : newValue.getMonth();
      const mmYY = dateValue + "/" + newValue.getFullYear();
      setValue(newValue);
      if (props.setChanged && props.checkAll) {
        props.setChanged(mmYY);
        props.checkAll();
      }
    }
  };

  return (
    <Container>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          views={["year", "month"]}
          disableFuture
          value={value}
          onChange={handleChange}
          renderInput={(params) => (
            <TextFieldContainer size="small" fullWidth {...params} />
          )}
          components={{
            OpenPickerIcon: Calendar,
          }}
          inputFormat="MM/yyyy"
        />
      </LocalizationProvider>
    </Container>
  );
};
export default ResponsiveDatePickers;
