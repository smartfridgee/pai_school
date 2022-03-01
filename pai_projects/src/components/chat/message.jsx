import './message.css';

export function Message(props) {
    
    const classes = [
        "bubble",
        props.sender ? "sender" : "owner",
    ]
    
    return(
        <div className={classes.join(" ")}>
            {props.text}
        </div>
    )
}