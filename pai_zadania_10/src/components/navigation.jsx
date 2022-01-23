import React from 'react';
import './navigation.css';
import { Switch, Route, Link } from 'react-router-dom';

class Navigation extends React.Component
{
    constructor(props) {
        super(props);

        this.state = {};
    }

    render = () => {
        return (
        <React.Fragment>
            <div className='navigation'>
            <div><Link to="/dashboard">Dashboard</Link></div>
            <div><Link to="/calculator">Calculator</Link></div>
            <div><Link to="/chat">Chat</Link></div>
            </div>
            <div className='viewcontainer'>
            <Switch>
                <Route path="/dashboard">
                <div>Test1</div>
                </Route>
                <Route path="/calculator">
                <div>Test2</div>
                </Route>
                <Route path="/chat">
                <div>Test3</div>
                </Route>
            </Switch>
            </div>
        </React.Fragment>
        );
    }
}

export default Navigation;
