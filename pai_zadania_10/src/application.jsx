import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Register from './components/register';
import Home from './components/home';
import Login from './components/login';
import Header from './components/header';
import './application.css';
import ProtectedRoute from './components/protectedroute';
import Navigation from './components/navigation';

class Application extends React.Component
{
    constructor(){
        super();
        this.state = {
            data: {
                update_data_callback: null,
                is_authorized: false,
                accounts: [],
            },
        }
    }

    update_data = (new_data) => {
        const new_state = Object.assign({}, this.state);
        new_state.data = new_data;
        this.setState(new_state);
    }

    update_accounts = (new_data) => {
        const new_state = Object.assign({}, this.state);
        new_state.data.accounts.push(new_data);
        this.setState(new_state);
    }

    update_auth = (new_data) => {
        const new_state = Object.assign({}, this.state);
        new_state.data.is_authorized = new_data;
        this.setState(new_state);
    }
    
    render(){
        return(
            <div>
                <Header data={this.state.data} />
                <div className='pagecontainer'>
                    <Switch>
                        <Route exact path="/">
                            <Home auth={this.state.data.is_authorized} />
                        </Route>
                        <Route exact path="/login">
                            <Login data={this.state.data} loginCallback = { this.update_auth } />
                        </Route>
                        <Route exact path="/register">
                            <Register data={this.state.data} registerCallback = { this.update_accounts } />
                        </Route>
                        <ProtectedRoute data={this.state.data} path={["/dashboard", "/calculator", "/chat"]}>
                            <Navigation data={this.state.data} />
                        </ProtectedRoute>
                    </Switch>
                </div>
            </div>
        )
    }
}

export default Application;