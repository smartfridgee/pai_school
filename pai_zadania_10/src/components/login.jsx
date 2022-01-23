import React from 'react';
import './login.css';
import { history } from '../utilities';

class Login extends React.Component
{
    constructor(props){
        super(props);
        this.state = {
            username: null,
            password: null,
            username_error: false,
            password_error: false,
        };
    }

    componentDidMount = () => {
        if(this.props.data.is_authorized === true) { history.push('/dashboard'); }
    }

    handle_login_button = () => {
        console.log(this.props.data);
        if( !(this.props.data.accounts.map(user => { return user["username"] })).includes(this.state.username) ) { return this.setState({username_error: true}); }
        let account = this.props.data.accounts.find(user => user.username === this.state.username);
        if(account.password !== this.state.password) { return this.setState({password_error: true}); }
        this.props.loginCallback(true);
        history.push('/dashboard');
    }

    render(){
        return(
            <div className='loginpage'>
                <br />
                <h2>Login</h2>
                <input type="text" name="pass" placeholder='Login' onChange={(event)=> this.setState({username: event.currentTarget.value, username_error: false})}/>
                { this.state.username_error ? (<p className='error'>Incorrect username!</p>) : "" }
                <input type="password" name="pass" placeholder='Password' onChange={(event)=> this.setState({password: event.currentTarget.value, password_error: false})}/>
                { this.state.password_error ? (<p className='error'>Incorrect password!</p>) : "" }
                <input type="button" value="Login" onClick={ () => this.handle_login_button() }/>
            </div>
        )
    }
}

export default Login;