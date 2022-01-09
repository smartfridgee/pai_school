import './App.css';
import React from 'react';

class App extends React.Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div className="calculator-body">
        <h2>Calculator</h2>
        <h3>0</h3>
        <p><b>HEX </b>1</p>
        <p><b>DEC </b>2</p>
        <p><b>OCT </b>3</p>
        <p><b>BIN </b>4</p>
        <div className="calculator-button-wrap">
          <button>CE</button><button>C</button><button>&#9003;</button><button>&#247;</button>
          <button>7</button><button>8</button><button>9</button><button>&#215;</button>
          <button>4</button><button>5</button><button>6</button><button>-</button>
          <button>1</button><button>2</button><button>3</button><button>+</button>
          <button className="long">0</button><button>.</button><button>=</button>
        </div>
      </div>
    )
  }
}

export default App;