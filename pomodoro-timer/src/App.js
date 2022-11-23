import './App.css';
import ActionButton from './Components/ActionButton';
import Timer from './Components/Timer';
import ValueModifier from './Components/ValueModifier';
import {useEffect, useReducer} from 'react'
import mainReducer, {initialState, COUNT_DOWN, STOP_TIMER} from './reducers';



function App() {

  return (


    <div className="App">
      <Timer time = {{minutes : state.time.minutes, seconds : state.time.seconds}} />
      <ValueModifier valueName="Session Time" id="session" value={state.sessionTime}></ValueModifier>
      <ValueModifier valueName ="Break Time" id="break" value={state.breakTime} ></ValueModifier>
      <ActionButton actionName="Start / Stop" id="start" clickHandler={handleClick}></ActionButton>
      <ActionButton actionName="Refresh" id="refresh"></ActionButton>
    </div>
  );
}

export default App;
