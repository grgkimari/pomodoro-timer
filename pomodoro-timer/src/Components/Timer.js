

const Timer = (props) => {
    return( 
        <div className="timer">
            <div className="minutes">{props.time.minutes.toString().padStart(2,"0")}</div>
            <div className="seconds">{props.time.seconds.toString().padStart(2,"0")}</div>
        </div>
    )
    
}

export default Timer