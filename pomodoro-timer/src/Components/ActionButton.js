

const ActionButton = (props) => {
    return( 
        <button className="actionButton" id={props.id}>
            {props.actionName}
        </button>
    )
}

export default ActionButton