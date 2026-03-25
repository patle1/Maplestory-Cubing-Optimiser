import React from 'react';
import styled from 'styled-components';

const Table = styled.table `
  border-collapse: separate;
  width: 60%;
  margin: 0% auto;
`;

const TdLeft = styled.td `
  background-color: grey;
  font-weight: bold;
  border: 2px solid black;
  padding: 5px 10px;
  color: black;
  font-size: 1rem;
`;

const TdRight = styled.td `
  border: 2px solid black;
  padding: 5px 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 5px;
`;

const StatInput = styled.input `
  height: 100%;
  border: none;
  text-align: right;
  font-size: 1rem;
  outline: none;
`;

const RightLabel = styled.span `
  right: 10px;
  font-size: 0.9rem;
`;

export default function StatEquivalencies({
  mainStatEquivalency,
  setMainStatEquivalency,
  secondaryStatEquivalency,
  setSecondaryStatEquivalency,
  weaponAttackEquivalency,
  setWeaponAttackEquivalency,
  bossDamageEquivalency,
  setBossDamageEquivalency,
}) {
  const stats = [
    { label: "1% Main Stat", value: mainStatEquivalency, setter: setMainStatEquivalency },
    { label: "1% Secondary Stat", value: secondaryStatEquivalency, setter: setSecondaryStatEquivalency },
    { label: "1% Weapon Attack", value: weaponAttackEquivalency, setter: setWeaponAttackEquivalency },
    { label: "1% Boss Damage", value: bossDamageEquivalency, setter: setBossDamageEquivalency },
  ];

  return (
    <>
      <Table>
        <tbody>
          {stats.map((stat, i) => (
          <tr key={i}>
            <TdLeft>{stat.label}</TdLeft>
            <TdRight>
              <StatInput
                name="Stat Equivalency Input"
                type="number"
                value={stat.value}
                onChange={e => stat.setter(e.target.value)}
              />
            <RightLabel>%Final Damage</RightLabel>
            </TdRight>
          </tr>
        ))}
        </tbody>
      </Table>
    </>
  );
}