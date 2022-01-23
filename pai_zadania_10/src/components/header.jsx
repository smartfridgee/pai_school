import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { history } from '../utilities';
import userlogo from './userlogo.jpg';

class Header extends React.Component
{
    constructor(props){
        super(props);
        this.state = {};
    }

    handle_button_on_click = (path) => {
        history.push(path);
    }

    create_unauthorized_view = () => {
        return(
            <div className='containerright'>
                <input type="button" value="Sign in" className="headerbutton" onClick={() => { this.handle_button_on_click("/login"); }} />
                <input type="button" value="Sign up" className="headerbutton" onClick={() => { this.handle_button_on_click("/register"); }}/>
            </div>
        )
    }

    create_authorized_view = () => {
        return(
            <div className="containerright">
                <img src={userlogo} alt="logo" className="userlogo" />
                <div>
                    <p className="username">Imię Naziwsko</p>
                    <p className="userrole">Rola Systemu</p>
                </div>
            </div>
        )
    }

    render(){
        return(
            <header className='header'>
                <div className="containerleft">
                    <Link to="/">MAIN PAGE</Link>
                </div>
                { this.props.data.is_authorized ? this.create_authorized_view() : this.create_unauthorized_view() }
            </header>
        )
    }
}

export default Header;