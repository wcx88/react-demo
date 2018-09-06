import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';

import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import NotFound from './pages/NotFound/NotFound';
import About from './pages/About/About';

import Dict from './pages/Dict/Dict';

const AppRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        sessionStorage.getItem('token') ? <Component {...props}/> : <Redirect to="/login"/>
    )}/>
)

export default () => (
        <Switch>
            <Route exact path="/" component={Login}/>
            <Route path="/login" component={Login}/>

            <AppRoute exact path="/home" component={Home}/>
            <AppRoute path="/dict" component={Dict}/>
            <AppRoute path="/about" component={About}/>

            <Route component={NotFound}/>
        </Switch>
);

