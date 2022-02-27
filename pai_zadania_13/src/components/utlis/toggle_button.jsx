import React from 'react';

class ToggleButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "is_toggled": false,
            "value": this.props.value,
        }
    }

    handleButtonClick = async() => {
        await this.setState({"is_toggled": !this.state.is_toggled})
        this.props.callback(this.state);
    }

    toggleOff = () => {
        this.setState({"is_toggled": false})
    }

    render = () => {
        return(
            <button key={this.props.name} onClick={this.handleButtonClick} className={this.state.is_toggled ? 'green' : ""}>{this.props.name}</button>
        )
    }
}

export default ToggleButton;