import React from "react";
import Input from "@material-ui/core/Input";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import Chip from "@material-ui/core/Chip";
import InputLabel from "@material-ui/core/InputLabel";

const MultiSelect = (props) => {
  const { data, value, label, handleMultiSelect, ...rest } = props;

  return (
    <>
      <InputLabel htmlFor="select">{label}</InputLabel>

      <Select
        labelId="multiSelect"
        //   id="demo-mutiple-name"
        multiple
        value={value}
        onChange={(e) => handleMultiSelect(e)}
        input={<Input />}
        //   MenuProps={MenuProps}
        renderValue={(selected) => (
          <div>
            {selected.map((value) => (
              <Chip key={value} label={value} />
            ))}
          </div>
        )}
        {...rest}
      >
        {data.map((c) => (
          <MenuItem key={c} value={c}>
            <Checkbox checked={value.indexOf(c) > -1} />

            {c}
          </MenuItem>
        ))}
      </Select>
    </>
  );
};

export default MultiSelect;
