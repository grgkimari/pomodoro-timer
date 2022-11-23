

const ActionButton = (props) => {
    return( 
        <button className="actionButton" id={props.id} onClick={() => props.clickHandler()}>
            {props.actionName}
        </button>
    )
}

export default ActionButton