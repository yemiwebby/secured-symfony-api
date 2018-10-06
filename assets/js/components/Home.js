import React, { Component } from 'react';
import NavBar from '../components/NavBar';
import { Route, Switch, Link } from 'react-router-dom';
import Resources from "./Resources";

export default class Home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Switch>
                    <Route path={"/resources"} component={Resources} />
                    {/*<Route path={"/"} component={ReviewForm} />*/}
                </Switch>
                {/*<Resources />*/}
                <p> This will work as the homepage </p>
            </div>
        )
    }
}