import React from 'react';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function AddEquipSelect({ label, value, onChange, items, error, showHelperText }) {
  return (
    <div>
      {/* {label && <p>{label}</p>} */}
      <FormControl fullWidth error={error}>
        <InputLabel>{label}</InputLabel>
        <Select
          variant="filled"
          value={value}
          onChange={onChange}        >
          {items.map(({ label, value }) => (
            <MenuItem key={value.toString()} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
        {showHelperText && <FormHelperText>
          Please fill in all potential lines
        </FormHelperText>}
      </FormControl>
    </div>
  );
}