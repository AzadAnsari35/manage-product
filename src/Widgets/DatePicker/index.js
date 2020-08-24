import React, { useState } from "react";
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const DatePicker = (props) => {
  // const [selectedDate, handleDateChange] = useState(new Date());
  const { ...rest } = props;

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        format="dd-MMM-yyyy"
        id="date-picker-inline"
        KeyboardButtonProps={{
          "aria-label": "change date",
        }}
        disableFuture
        {...rest}
      />
    </MuiPickersUtilsProvider>
  );
};

export default DatePicker;
