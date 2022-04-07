import React from "react";

class InputField extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        name: "",
        surname: "",
        nickname: "",
    }
  }

  handleSendButton = () => {
    this.props.callback(this.state);
  }

  render = () => {
    return(
      <div>
          <input type="text" placeholder="name" onChange={ event => { this.setState({ "name": event.currentTarget.value }) }} />
          <input type="text" placeholder="surname" onChange={ event => { this.setState({ "surname": event.currentTarget.value }) }} />
          <input type="text" placeholder="nickname" onChange={ event => { this.setState({ "nickname": event.currentTarget.value }) }} />
          <input type="button" value="Prześlij" onClick={this.handleSendButton}/>
      </div>
    )
  }
}

export default InputField;