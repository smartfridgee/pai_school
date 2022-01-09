import React from 'react';
import { websocket } from './../../websocket'

class Panel extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            input_text: "",
        }
    }

    handleInputTextOnChange = (event) => {
        const new_state = Object.assign({}, this.state);
        new_state.input_text = event.target.value;
        this.setState(new_state);
    }
    
    handleInputButtonOnClick = (event) => {
        websocket.send(JSON.stringify({
        type: "new_message",
        data: {
            message: this.state.input_text,
        },
        }));
    
        const new_state = Object.assign({}, this.state);
        new_state.input_text = "";
        this.setState(new_state);
    }    

    render = () => {
        return (
        <div>
            <input type="text" onChange={this.handleInputTextOnChange}></input>
            <button onClick={this.handleInputButtonOnClick}>Wyślij</button>
        </div>
        );
    }
}

export default Panel;
