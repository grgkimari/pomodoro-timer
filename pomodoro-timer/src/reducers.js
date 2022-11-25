export const INCREMENT_SESSION_TIME = "INCREMENT-SESSION-TIME"
export const DECREMENT_SESSION_TIME = "DECREMENT-SESSION-TIME"
export const INCREMENT_BREAK_TIME = "INCREMENT-BREAK-TIME"
export const DECREMENT_BREAK_TIME = "DECREMENT-BREAK-TIME"
export const SET_INTERVAL = "SET_INTERVAL"
export const COUNT_DOWN = "COUNT-DOWN"
export const CLEAR_INTERVAL = "CLEAR-INTERVAL"
export const TOGGLE_POWER = "TOGGLE-POWER"
export const initialState = {
    running : false,
    interval : null,
    sessionMode : true,
    sessionTime : 1,
    breakTime: 1,
    time : {
        minutes : 0,
        seconds : 5,
    }
}

const mainReducer = (state = initialState, action) => {
    switch (action.type){
        case INCREMENT_SESSION_TIME:
            return Object.assign({}, state, {sessionTime : state.sessionTime + 1})
        case DECREMENT_SESSION_TIME:
            if(state.sessionTime === 0){
                return state
            }
            return Object.assign({}, state, {sessionTime : state.sessionTime - 1})
        case INCREMENT_BREAK_TIME:
            return Object.assign({}, state, {breakTime : state.breakTime + 1})
        case DECREMENT_BREAK_TIME:
            if(state.breakTime === 0){
                return state
            }
            return Object.assign({}, state, {breakTime : state.breakTime - 1})
        
        case TOGGLE_POWER:
            console.log("Changing running from " + state.running + " to " + !state.running)
            return Object.assign({}, state, {running : !state.running})
        
        case COUNT_DOWN:
            console.log("Countdown")
            if(state.time.seconds > 0){
                return Object.assign({}, state, {time : {
                    minutes : state.time.minutes,
                    seconds : state.time.seconds -  1,
                }})
            }
            else{
                if(state.time.minutes > 0){
                    return Object.assign({}, state, {
                        time : {
                            minutes : state.time.minutes - 1,
                            seconds : 59,
                        }
                    })
                }
                else{
                    clearInterval(state.interval)
                    console.log("___________________\n- - - DONE - - - \n ________________________")
                    if(state.sessionMode){
                        return Object.assign({}, state, {
                            sessionMode : !state.sessionMode,
                            interval : null,
                            running : false,
                            time : {
                                minutes : state.breakTime,
                                seconds : 0,
                            }
                        })
                    }
                    else {
                        return Object.assign({}, state, {
                            sessionMode : !state.sessionMode,
                            interval : null,
                            running : false,
                            time : {
                                minutes : state.sessionTime,
                                seconds : 0,
                            }
                        })
                        }
                    }
                }
        
        case SET_INTERVAL:
            console.log("Setting interval to : " + action.payload.interval)
            return Object.assign({}, state, {interval : action.payload.interval})
        
        case CLEAR_INTERVAL:
            clearInterval(state.interval)
            return Object.assign({}, state, {interval : null})
        
        default:
            return Object.assign({}, initialState)
    }
}

export default mainReducer