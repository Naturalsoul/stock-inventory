import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

// Screens
import Login from '../screens/Login';

export default () => (
    <Router>
        <Route exact path='/' component={Login} />
    </Router>
);