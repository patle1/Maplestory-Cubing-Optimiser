import React, { useState } from 'react';
// import { styled } from "@mui/material/styles";
import styled from "@emotion/styled";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import TextField from '@mui/material/TextField';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import { EquipTypes } from '../assets/EquipTypes';

const StyledDialogTitle = styled(DialogTitle)`
  text-align: center;
`;

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledForm = styled.form`
  width: 100%;
`;

export default function AddEquipPopup({ open, setOpen, equips, setEquips }) {
  const [equipType, setEquipType] = useState("");
  const [under160, setUnder160] = useState("");
  const [isDestinyLibbed, setIsDestinyLibbed] = useState("");

  console.log("equipType:", equipType);
  console.log("under160:", under160);

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = () => {
    const newEquip = {
      equipType: equipType,
      under160: undeer160,
      // pot
    }
    setEquips(equips => [...equips, newEquip]);
    setOpen(false);
  };
  
  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <StyledDialogTitle>Add an equip</StyledDialogTitle>
        <DialogContent>
          <DropdownContainer>
            <StyledForm id="add-equip-form" onSubmit={handleSubmit}>
              <FormControl fullWidth>
                <InputLabel id="select-equip-type-label">Equip type</InputLabel>
                <Select
                  labelId="select-equip-type-label"
                  id="select-equip-type"
                  value={equipType}
                  label="Equip Type"
                  onChange={e => setEquipType(e.target.value)}
                >
                  {Object.values(EquipTypes).map(value => (
                    <MenuItem value={value}>{value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
              <FormControl fullWidth>
                <InputLabel id="select-equip-lvl-label">Equip level</InputLabel>
                <Select
                  labelId="select-equip-lvl-label"
                  id="select-equip-lvl"
                  value={under160}
                  label="Equip Level"
                  onChange={e => setUnder160(e.target.value)}
                >
                  <MenuItem value={true}>&lt;160</MenuItem>
                  <MenuItem value={false}>&ge;160</MenuItem>
                </Select>
              </FormControl>
              {equipType == EquipTypes.WEAPON && under160 !== "" ?
                <FormControl fullWidth>
                  <InputLabel id="select-is-destiiny-libbed-label">Destiny liberated?</InputLabel>
                  <Select
                    labelId="select-is-destiny-libbed-label"
                    id="select-is-destiny-libbed"
                    value={isDestinyLibbed}
                    label="Destiny libbed?"
                    onChange={e => setIsDestinyLibbed(e.target.value == true)}
                  >
                    <MenuItem value={true}>Yes</MenuItem>
                    <MenuItem value={false}>No</MenuItem>
                  </Select>
                </FormControl>
              : null}
              {/* TODO: pptentials*/} 
              {/* {(equipType !== "" && under160 !== "") || (equipType == EquipTypes.WEAPON && under160 !== "" && isDestinyLibbed !== "") ?
                <section>
                  <FormControl fullWidth>
                    <InputLabel id="input-">Equip level</InputLabel>
                    <Select
                      labelId="select-equip-lvl-label"
                      id="select-equip-lvl"
                      value={under160}
                      label="Equip Level"
                      onChange={e => setUnder160(e.target.value == true)}
                    >
                      <MenuItem value={true}>&lt;160</MenuItem>
                      <MenuItem value={false}>&ge;160</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="select-equip-lvl-label">Equip level</InputLabel>
                    <Select
                      labelId="select-equip-lvl-label"
                      id="select-equip-lvl"
                      value={under160}
                      label="Equip Level"
                      onChange={e => setUnder160(e.target.value == true)}
                    >
                      <MenuItem value={true}>&lt;160</MenuItem>
                      <MenuItem value={false}>&ge;160</MenuItem>
                    </Select>
                  </FormControl>
                </section>
              : null} */}
            </StyledForm>
          </DropdownContainer>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            type="submit"
            form="add-equip-form"
            onClick={handleSubmit}
          >
            Add equip
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}