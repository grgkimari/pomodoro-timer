import './App.css';
import ActionButton from './Components/ActionButton';
import Timer from './Components/Timer';
import ValueModifier from './Components/ValueModifier';



function App() {
  return (
    <div className="App">
      <Timer time = {{minutes : "25", seconds : "00"}} />
      <ValueModifier valueName="Session Time" id="session" value="25"></ValueModifier>
      <ValueModifier valueName ="Break Time" id="break" value="5"></ValueModifier>
      <ActionButton actionName="Start / Stop" id="start"></ActionButton>
      <ActionButton actionName="Refresh" id="refresh"></ActionButton>
    </div>
  );
}

export default App;
