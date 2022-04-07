import React from "react";

class TableView extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  handleDelete = (e) => {
      this.props.toDelete(e.currentTarget.dataset.id);
  }

  render = () => {

    if(this.props.tableitems.length === 0) {
        return(
            <h1>No data</h1>
        )
    }
    else {
        return(
            <table>
                <thead>
                    <tr>
                      <th>Lp.</th>
                      <th>Imie</th>
                      <th>Nazwisko</th>
                      <th>Pseudonim</th>
                      <th></th>
                    </tr>
                </thead>
                <tbody>
                  {
                  this.props.tableitems.map((item, i) => {
                      return <tr key={i}><td>{i+1}</td><td>{item.name}</td><td>{item.surname}</td><td>{item.nickname}</td><td><button data-id={i} onClick={e => {this.handleDelete(e)}}>Usuń</button></td></tr>;
                  })
                  }
                </tbody>
            </table>
          )
    }
  }
}

export default TableView;