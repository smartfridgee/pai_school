import React from 'react';
import './register.css';
import { history } from '../utilities';

class Register extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
            confirm_password: null,
            username_error: false,
            password_error: false,
        };
    }

    handle_register_button = () => {
        if( (this.props.data.accounts.map(user => { return user["username"] })).includes(this.state.username) ){
            this.setState({username_error: true});
            return;
        }
        if(this.state.username === null || this.state.username === "") { return this.setState({username_error: true}); }
        if(this.state.password === null || this.state.password === "") { return this.setState({password_error: true}); }
        if(this.state.password_error === true) { return; }

        const client = { username: this.state.username, password: this.state.password }
        this.props.registerCallback(client);
        history.push('/login');
    }

    handle_password_confirm = async(event) => {
        await this.setState({confirm_password: event.currentTarget.value});
        this.handle_password_correction();
    }

    handle_password_input = async(event) => {
        await this.setState({password: event.currentTarget.value});
        this.handle_password_correction();
    }

    handle_password_correction = () => {
        if(this.state.password !== this.state.confirm_password) { return this.setState({password_error: true}) };
        this.setState({password_error: false});
    }

    render(){
        return(
            <div className='registerpage'>
                <br />
                <h2>Register</h2>
                <input type="text" placeholder='Login' onChange={(event)=> this.setState({username: event.currentTarget.value, username_error: false})} />
                { this.state.username_error ? (<p className='error'>Username is not valid or already exists!</p>) : "" }
                <input type="password" placeholder='Password' onChange={ (event) => this.handle_password_input(event) }/>
                <input type="password" placeholder='Confirm Password' onChange={ (event) => this.handle_password_confirm(event) } />
                { this.state.password_error ? (<p className='error'>Passwords don't match!</p>) : "" }
                <input type="submit" value="Register" onClick={() => this.handle_register_button() }/>
            </div>
        )
    }
}

export default Register;