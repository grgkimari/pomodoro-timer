export const INCREMENT_SESSION_TIME = "INCREMENT-SESSION-TIME"
export const DECREMENT_SESSION_TIME = "DECREMENT-SESSION-TIME"
export const INCREMENT_BREAK_TIME = "INCREMENT-BREAK-TIME"
export const DECREMENT_BREAK_TIME = "DECREMENT-BREAK-TIME"
export const COUNT_DOWN = "COUNT-DOWN"
export const STOP_TIMER = "STOP-TIMER"
export const initialState = {
    running : false,
    sessionTime : 25,
    breakTime: 5,
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

        default:
            return Object.assign({}, initialState)
    }
}

export default mainReducer