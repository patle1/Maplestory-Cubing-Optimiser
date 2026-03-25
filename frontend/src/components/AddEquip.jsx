import React, { useState } from 'react';
import styled from 'styled-components';

import AddEquipPopup from './AddEquipPopup';

const Container = styled.div `
  height: 30px;
  display: flex;
  flex-direction: row;
  margin: 0 auto;
  gap: 10px;
`;

const AddButton = styled.button `
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  padding: 3px;
  cursor: pointer;
  border: 1px solid black;
`;

const AddEquipText = styled.span `
  padding-top: 1px;
  vertical-align: top;
`;

export default function AddEquip({ equips, setEquips }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <>
      <Container>
        <AddButton onClick={handleClickOpen}>+</AddButton>
        <AddEquipText>
          Add equipment
        </AddEquipText>
      </Container>
      <AddEquipPopup
        open={open}
        setOpen={setOpen}
        equips={equips}
        setEquips={setEquips}
      />
    </>
  );
}