import React from 'react';
import { EquipTypes } from '../assets/EquipTypes';
import { StatPotentials, WeaponPotentials } from '../assets/Potentials';
import AddEquipSelect from './AddEquipSelect';

export default function PotentialsForm({
  equipType,
  under160,
  isDestinyLibbed,
  potential1,
  setPotential1,
  potential2,
  setPotential2,
  potential3,
  setPotential3,
  submitted,
}) {
  const hasError = submitted && (!potential1 || !potential2 || !potential3);

  let firstLineOptions;
  let allOptions;

  if (equipType === EquipTypes.WEAPON || equipType === EquipTypes.SECONDARY || equipType === EquipTypes.EMBLEM) {
    allOptions = Object.entries(WeaponPotentials).map(([key, data]) => {
      let value;
      if (key === "PRIMEATT" || key === "BASEATT") {
        value = equipType === EquipTypes.WEAPON || !under160 ? data.higher : data.lower;
      } else {
        value = equipType === EquipTypes.WEAPON && isDestinyLibbed ? data.higher : data.lower;        
      }
      
      return {
        label: `${value}% ${data.label}`,
        value: key,
      };
    });
    firstLineOptions = allOptions.filter(option => option.value !== "BASEATT" && option.value !== "LOWBOSS");
  } else {
    allOptions = Object.entries(StatPotentials).map(([key, data]) => {
      const value = under160 ? data.lower : data.higher;

      return {
        label: `${value}% ${data.label}`,
        value: key,
      };
    });
    firstLineOptions = allOptions.slice(0, 2);
  }
  
  return (
    <>
      <AddEquipSelect
        label="Line 1"
        value={potential1}
        onChange={e => setPotential1(e.target.value)}
        items={firstLineOptions}
        error={hasError}
      />
      <AddEquipSelect
        label="Line 2"
        value={potential2}
        onChange={e => setPotential2(e.target.value)}
        items={allOptions}
        error={hasError}
      />
      <AddEquipSelect
        label="Line 3"
        value={potential3}
        onChange={e => setPotential3(e.target.value)}
        items={allOptions}
        error={hasError}
        showHelperText={hasError}
      />
    </>
  );
}