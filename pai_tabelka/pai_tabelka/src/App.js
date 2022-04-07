import React from "react";
import InputField from "./components/InputField";
import TableView from "./components/TableView";
import './components/style.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      tableItems: [

      ],
    }
  }

  handleNewInput = (data) => {
        let newState = Object.assign(this.state);
        newState.tableItems.push(data);
        this.setState(newState);
  }

  handleDelete = (index) => {
    let newState = Object.assign(this.state);
    newState.tableItems.splice(index, 1);
    this.setState(newState);
  }

  render = () => {
    return(
      <div className="app">
        <InputField callback={this.handleNewInput} />
        <TableView tableitems={ this.state.tableItems } toDelete={this.handleDelete}/>
      </div>
    )
  }
}

export default App;