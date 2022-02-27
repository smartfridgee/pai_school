import React from 'react';
import './tile.css';

class Tile extends React.Component {
    constructor(props) {
        super(props);
    }

    render = () => {
        return(
            <div className='tile'>
                <img src={require(`./assets/images/${this.props.path}.png`)} />
                <h2>{this.props.name}</h2>
            </div>
        )
    }
}

export default Tile;