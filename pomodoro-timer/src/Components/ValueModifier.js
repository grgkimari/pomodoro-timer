



const ValueModifier = (props) => {
    return( 
        <div className="valueModifier" id = {props.id}>
            <h5 className="valueName">{props.valueName}</h5>
            <button className="modButton increase" > + </button>
            <div className="value">{props.value}</div>
            <button className="modButton reduce" > - </button>
        </div>
    )
}

export default ValueModifier