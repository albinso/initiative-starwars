
import './App.css';
// import Roller
import Roller from './roller.js';
import DiePicker from './diepicker.js';

// import useState and useEffect
import { useState, useCallback, useEffect } from 'react';

function App() {

  // state to keep track of the skill and proficiency and name for multiple diepickers

  // state map from id to an object with skill, proficiency, and name
  const [diePickers, setDiePickers] = useState(new Map());

  const [showPickers, setShowPickers] = useState(true);

  const [update, setUpdate] = useState(0);

  const callBack = useCallback((id, skill, proficiency, name) => {
    console.log(id + ": " + name + " skill: " + skill + " proficiency: " + proficiency);
    setDiePickers(diePickers.set(id, {id: id, skill: skill, proficiency: proficiency, name: name}));
    setUpdate(update + 1);
  }, [diePickers, update]);

  const rollCallBack = useCallback(() => {
    setShowPickers(false);
    setUpdate(update + 1);
  }, [update]);

  useEffect (() => {
  }, [showPickers, diePickers]);
  

  return (
    <div className="App">
      <header className="App-header">
      
        <div>
          <Roller diePickers={diePickers} callBack={rollCallBack} showResult={!showPickers}/>
        </div>
        <div className="DiePickerGrid">
          <DiePicker callBack={callBack} show={showPickers} id="1" initName="Goon"/>
          <DiePicker callBack={callBack} show = {showPickers} id="2" initName="Baddie"/>
          <DiePicker callBack={callBack} show = {showPickers} id="3" initName="Boss"/>
          <DiePicker callBack={callBack} show = {showPickers} id="4" initName="Slapboi"/>
          <DiePicker callBack={callBack} show = {showPickers} id="5" initName="Goomba"/>

          <DiePicker callBack={callBack} show = {showPickers} id="6" initName="P1" initSkill={1}/>
          <DiePicker callBack={callBack} show = {showPickers} id="7" initName="P2" initSkill={1}/>
          <DiePicker callBack={callBack} show = {showPickers} id="8" initName="P3" initSkill={1}/>
          <DiePicker callBack={callBack} show = {showPickers} id="9" initName="P4" initSkill={1}/>
          <DiePicker callBack={callBack} show = {showPickers} id="10" initName="P5" initSkill={1}/>


        
        </div>
        
      </header>
    </div>
  );
}

export default App;
