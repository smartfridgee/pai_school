import React from 'react';
import { Link, Outlet } from "react-router-dom";

class Application extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }

    render(){
        return(
            <div>
                Application
                <div><Link to="/register">Register</Link></div>
                <div><Link to="/login">Login</Link></div>
                <Outlet />
            </div>
        )
    }
}

export default Application;