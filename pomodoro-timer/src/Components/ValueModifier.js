import { INCREMENT_SESSION_TIME, DECREMENT_SESSION_TIME, INCREMENT_BREAK_TIME, DECREMENT_BREAK_TIME } from "../reducers"



const ValueModifier = (props) => {
    return( 
        <div className="valueModifier" id = {props.id}>
            <h5 className="valueName">{props.valueName}</h5>
            <button className="modButton increase" onClick={props.id === "session" ? (event) => props.clickHandler( {type : INCREMENT_SESSION_TIME}) : (event) => props.clickHandler( {type : INCREMENT_BREAK_TIME})}> + </button>
            <div className="value">{props.value}</div>
            <button className="modButton reduce" onClick={(event) => props.clickHandler( {type : DECREMENT_BREAK_TIME})}> - </button>
        </div>
    )
}

export default ValueModifier