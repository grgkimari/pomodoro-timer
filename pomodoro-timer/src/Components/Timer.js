

const Timer = (props) => {
    return( 
        <div className="timer">
            <div className="minutes">{props.time.minutes}</div>
            <div className="seconds">{props.time.seconds}</div>
        </div>
    )
    
}

export default Timer