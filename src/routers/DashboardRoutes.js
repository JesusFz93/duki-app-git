import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import { Principal } from '../components/journal/PrincipalScreen';
import { Navbar } from '../ui/navbar/Navbar';

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={ Principal } />

                    <Redirect to="/marvel" />
                </Switch>
            </div>


        </>
    )
}
