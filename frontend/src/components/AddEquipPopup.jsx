import React, { useState } from 'react';
import styled from "@emotion/styled";
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import { EquipTypes } from '../assets/EquipTypes';
import AddEquipSelect from './AddEquipSelect';
import PotentialsForm from './PotentialsForm';
import TextField from '@mui/material/TextField';

const StyledDialogTitle = styled(DialogTitle)`
  text-align: center;
  font-weight: 600;
  font-size: 1.4rem;
  padding-bottom: 4px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const StyledForm = styled.form`
  width: 100%;
  padding-top: 10px;
`;

export default function AddEquipPopup({ open, setOpen, equips, setEquips }) {
  const [equipName, setEquipName] = useState("");
  const [equipType, setEquipType] = useState(EquipTypes.ACCESSORY);
  const [under160, setUnder160] = useState(true);
  const [isDestinyLibbed, setIsDestinyLibbed] = useState(false);
  const [potential1, setPotential1] = useState("");
  const [potential2, setPotential2] = useState("");
  const [potential3, setPotential3] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const resetStates = () => {
    setEquipName("");
    setEquipType(EquipTypes.ACCESSORY);
    setUnder160(true);
    setIsDestinyLibbed(false);
    setPotential1("");
    setPotential2("");
    setPotential3("");
    setSubmitted(false);
  };

  const handleClose = () => {
    resetStates();
    setOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setSubmitted(true);

    if (!equipName || !potential1 || !potential2 || !potential3) {
      return;
    }

    const newEquip = {
      equipName: equipName,
      equipType: equipType,
      under160: under160,
      isDestinyLibbed: isDestinyLibbed,
      potentials: [potential1, potential2, potential3],
    };
    setEquips(equips => [...equips, newEquip]);

    handleClose();
  };

  const getEquipTypeOptions = () => {
    return Object.values(EquipTypes).map(value => (
      {
        label: value,
        value: value,
      }
    ));
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <StyledDialogTitle>Add an equip</StyledDialogTitle>
        <DialogContent>
          <StyledForm id="add-equip-form" onSubmit={handleSubmit}>
            <FormContainer>
              <TextField
                value={equipName}
                onChange={e => setEquipName(e.target.value)}
                label="Item name"
                required
                error={submitted && !equipName}
                helperText={submitted && !equipName ? "This field is required" : ""}
              />
              <AddEquipSelect
                label="Equip type"
                value={equipType}
                onChange={e => setEquipType(e.target.value)}
                items={getEquipTypeOptions()}
              />
                {equipType !== EquipTypes.WEAPON ? (
                  <AddEquipSelect
                    label="Equip level"
                    value={under160}
                    onChange={e => setUnder160(e.target.value)}
                    items={[
                      { label: "<160", value: true },
                      { label: "≥160", value: false },
                    ]}
                  />
                ) : (
                  <AddEquipSelect
                    label="Is Destiny Libbed"
                    value={isDestinyLibbed}
                    onChange={e => setIsDestinyLibbed(e.target.value)}
                    items={[
                      { label: "Yes", value: true },
                      { label: "No", value: false },
                    ]}
                  />
                )}
              <div>
                <PotentialsForm
                  equipType={equipType}
                  under160={under160}
                  isDestinyLibbed={isDestinyLibbed}
                  potential1={potential1}
                  setPotential1={setPotential1}
                  potential2={potential2}
                  setPotential2={setPotential2}
                  potential3={potential3}
                  setPotential3={setPotential3}
                  submitted={submitted}
                />
              </div>
            </FormContainer>
          </StyledForm>
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