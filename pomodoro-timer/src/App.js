import './App.css';
import Timer from './Components/Timer';
import ValueModifier from './Components/ValueModifier';
import React, {useEffect, useReducer} from 'react'
import ReactDOM from 'react-dom'
import mainReducer, {initialState, TOGGLE_POWER, CLEAR_INTERVAL, SET_INTERVAL, COUNT_DOWN} from './reducers';



function App() {
  const[state, dispatch] = useReducer (mainReducer, initialState)

  const toggle_timer = (event) => {
    dispatch({
      type: TOGGLE_POWER
    })
    console.log("Switched on")
    if(event.target.innerHTML === "Start"){
      event.target.innerHTML = "Stop"
    }
    else {
      event.target.innerHTML = "Start"
    }
    console.log("Button Changed")
      if(state.interval === null){
        dispatch({
          type: SET_INTERVAL,
          payload: setInterval(() => dispatch({type : COUNT_DOWN}), 1000)
        })
        console.log("Interval set")
      }
    else{
      clearInterval(state.interval)
      dispatch({
        type : CLEAR_INTERVAL
      })
      console.log("Interval cleared")
    }
  }
  
 
  console.log("State : " + JSON.stringify(state))
  return (

    <div className="App">
      <Timer time = {{minutes : state.time.minutes, seconds : state.time.seconds}} />
      <ValueModifier valueName="Session Time" id="session" value={state.sessionTime} clickHandler = {dispatch}></ValueModifier>
      <ValueModifier valueName ="Break Time" id="break" value={state.breakTime} clickHandler = {dispatch}></ValueModifier>
      <button className="actionButton" id="start" onClick={toggle_timer}>
            Start
        </button>
    </div>
  );
}

export default App;
