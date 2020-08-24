import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";

const SelectItem = (props) => {
  const { data, label, handleSelect, ...rest } = props;

  return (
    <>
      <InputLabel htmlFor="select">{label}</InputLabel>
      <Select
        labelId="select"
        //   id="demo-mutiple-name"
        onChange={(e) => handleSelect(e)}
        {...rest}
      >
        {data.map((c) => (
          <MenuItem key={c} value={c}>
            {c}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default SelectItem;
