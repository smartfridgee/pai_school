import React from 'react';
import { useParams } from "react-router-dom";

const withRouter = (Child) => {
    return (props) => {
        const params = useParams();
        return <Child { ...props } params={ params } />;
    }
};

class Dashboard extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div>
                Dashboard = {this.props.params.id}
            </div>
        );
    }
}

export default withRouter(Dashboard);