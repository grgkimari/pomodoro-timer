import './App.css';
import ActionButton from './Components/ActionButton';
import Timer from './Components/Timer';
import ValueModifier from './Components/ValueModifier';
import {useReducer} from 'react'
import mainReducer, {initialState} from './reducers';



function App() {

  

  function handleClick (action) {
    dispatch(action)
  }

  const[state, dispatch] = useReducer(mainReducer, initialState)




  return (
    <div className="App">
      <Timer time = {{minutes : state.time.minutes, seconds : state.time.seconds}} />
      <ValueModifier valueName="Session Time" id="session" value={state.sessionTime} clickHandler={handleClick}></ValueModifier>
      <ValueModifier valueName ="Break Time" id="break" value={state.breakTime} clickHandler={handleClick}></ValueModifier>
      <ActionButton actionName="Start / Stop" id="start"></ActionButton>
      <ActionButton actionName="Refresh" id="refresh"></ActionButton>
    </div>
  );
}

export default App;
