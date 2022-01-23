import React from 'react';
import { Route } from 'react-router-dom';

class ProtectedRoute extends Route
{
    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => {
        return (
            <React.Fragment>
                {this.props.data.is_authorized ? this.props.children : (<div>You must log in to view the page.</div>)}
            </React.Fragment>
        );
    }
}

export default ProtectedRoute;
