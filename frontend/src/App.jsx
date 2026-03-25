import React, { useState } from 'react';
import './App.css';

import StatEquivalencies from './components/StatEquivalencies';
import AddEquip from './components/AddEquip';

function App() {
  const [mainStatEquivalency, setMainStatEquivalency] = useState(1);
  const [secondaryStatEquivalency, setSecondaryStatEquivalency] = useState(1);
  const [weaponAttackEquivalency, setWeaponAttackEquivalency] = useState(1);
  const [bossDamageEquivalency, setBossDamageEquivalency] = useState(1);
  const [equips, setEquips] = useState([]);
  

  return (
    <>
      <h1>End-game Cubing Optimiser</h1>
      <br />
      <StatEquivalencies
        mainStatEquivalency={mainStatEquivalency}
        setMainStatEquivalency={setMainStatEquivalency}
        secondaryStatEquivalency={secondaryStatEquivalency}
        setSecondaryStatEquivalency={setSecondaryStatEquivalency}
        weaponAttackEquivalency={weaponAttackEquivalency}
        setWeaponAttackEquivalency={setWeaponAttackEquivalency}
        bossDamageEquivalency={bossDamageEquivalency}
        setBossDamageEquivalency={setBossDamageEquivalency}
      />
      <br />
      <AddEquip equips={equips} setEquips={setEquips}/>        
    </>
  );
}

export default App
