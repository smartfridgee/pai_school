import React from 'react';
import { history } from '../utilities';

class Home extends React.Component
{
    constructor(props){
        super(props);
        this.state = {};
    }

    componentDidMount = () => {
        if(this.props.auth === true) { history.push('/dashboard'); }
    }

    render(){
        return(
            <div>
                
            </div>
        )
    }
}

export default Home;